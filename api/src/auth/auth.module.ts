import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get('JWT_SESSION_SECRET')!,
        signOptions: {
          expiresIn: '15m'
        },
      }),

    }),
    UsersModule,
  ],
  providers: [PrismaService, AuthService],
  exports: [AuthService]
})
export class AuthModule { }
