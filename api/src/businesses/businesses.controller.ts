import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BusinessesService } from './businesses.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';

@Controller('businesses')
export class BusinessesController {
  constructor(private readonly businessesService: BusinessesService) { }

  @Post()
  create(@Body() createBusinessDto: CreateBusinessDto) {
    return this.businessesService.create(createBusinessDto);
  }

  @Get()
  findAll(@Query('search') searchStr: string | undefined) {
    if (searchStr?.trim()) {
      return this.businessesService.findAll({
        where: {
          name: {
            contains: searchStr
          }
        }
      });
    }

    return this.businessesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessesService.findOne({
      where: {
        id: +id
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusinessDto: UpdateBusinessDto) {
    return this.businessesService.update(+id, updateBusinessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessesService.remove(+id);
  }
}
