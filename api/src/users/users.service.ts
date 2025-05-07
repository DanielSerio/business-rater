import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserSchema, RegisterBody } from './schema/create.schema';
import { ZodError } from 'zod';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  private SUPER_EMAIL: string;

  constructor(
    config: ConfigService,
    private prisma: PrismaService
  ) {
    this.SUPER_EMAIL = config.get('SUPERUSER_EMAIL')!;
  }

  private isZodError(err: unknown): err is ZodError {
    return (err as ZodError).issues !== undefined;
  }

  private handleErrorResponse(err: unknown) {
    if (this.isZodError(err)) {
      throw new BadRequestException({
        name: err.name,
        message: err.message,
        issues: err.issues,
        stack: err.stack
      });
    }

    throw new InternalServerErrorException();
  }

  private create = async (body: RegisterBody) => {
    const salt = await bcrypt.genSaltSync();
    const hash = await bcrypt.hashSync(body.password, salt);
    let role: 'USER' | 'ADMIN' = 'USER';
    let isVerified = false;
    let accessLevel = 1;

    if (this.SUPER_EMAIL === `${body.email}`.toLowerCase()) {
      role = 'ADMIN';
      isVerified = true;
      accessLevel = 5;
    }

    const savedUser = await this.prisma.user.create({
      data: {
        email: body.email,
        hash,
        role,
        isVerified
      }
    });

    const savedAccount = await this.prisma.account.create({
      data: {
        id: savedUser.id,
        email: body.email,
        username: body.username
      }
    });

    const savedPermissions = await this.prisma.userPermission.create({
      data: {
        userId: savedUser.id,
        scope: 'global',
        accessLevel
      }
    });

    const { hash: _, ...user } = savedUser;

    return {
      ...user,
      ...savedAccount,
      Permissions: [
        savedPermissions
      ]
    };
  };

  async getForCredential({ email, id }: { email?: string; id?: string; }) {
    let where: { email?: string; id?: string; } = {
      email
    };

    if (!!id) {
      where = {
        id
      };
    }

    const result = await this.prisma.user.findFirst({
      where,
      select: {
        id: true,
        email: true,
        hash: true,
        role: true,
        Account: {
          select: {
            username: true,
            ProfileImage: true,
            profileImageId: true
          }
        },
        Permissions: true,
      }
    });

    if (result) {
      const { hash, ...user } = result;

      return {
        hash,
        user
      };
    }

    return null;
  }

  async register(body: RegisterBody) {
    try {
      const parsed = CreateUserSchema.parse(body);
      const created = await this.create(parsed);

      return created;
    } catch (err) {
      console.error(err);
      return this.handleErrorResponse(err);
    }
  }

  updateRefreshToken(id: string, token: string) {
    this.prisma.user.update({
      where: { id },
      data: {
        refreshToken: token
      }
    });
  }
}
