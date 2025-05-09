import { Injectable } from '@nestjs/common';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BusinessesService {
  constructor(private prisma: PrismaService) { }

  async create(createBusinessDto: CreateBusinessDto) {
    return await this.prisma.business.create({
      data: {
        name: createBusinessDto.name,
        description: createBusinessDto.description,
        cityId: createBusinessDto.cityId,
        profileImageId: createBusinessDto.profileImageId,
        websiteUrl: createBusinessDto.websiteUrl
      }
    });
  }

  async findAll(...params: Parameters<typeof this.prisma.business.findMany>) {
    return await this.prisma.business.findMany(...params);
  }

  async findOne(...params: Parameters<typeof this.prisma.business.findFirst>) {
    return await this.prisma.business.findFirst(...params);
  }

  async update(id: number, updateBusinessDto: UpdateBusinessDto) {
    return await this.prisma.business.update({
      where: {
        id
      },
      data: updateBusinessDto
    });
  }

  async remove(id: number) {
    return await this.prisma.business.delete({
      where: {
        id
      },
    });
  }
}
