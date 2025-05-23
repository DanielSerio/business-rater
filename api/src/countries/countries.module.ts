import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CountriesController],
  providers: [PrismaService, CountriesService],
})
export class CountriesModule { }
