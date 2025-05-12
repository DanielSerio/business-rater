import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { StatesService } from './states.service';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';

@Controller('states')
export class StatesController {
  constructor(private readonly statesService: StatesService) { }
  @Post()
  create(@Body() createStateDto: CreateStateDto) {
    return this.statesService.create(createStateDto);
  }

  @Get()
  findAll(
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
    @Query('sort') sort?: string,
    @Query('filter') filter?: string,
    @Query('search') search?: string
  ) {
    return this.statesService.getList({
      paging: {
        limit,
        offset
      },
      sorting: {
        sort
      },
      filtering: {
        filter,
        search,
        searchFieldNames: ['code', 'name']
      }
    });
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStateDto: UpdateStateDto) {
    return this.statesService.update(+id, updateStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statesService.remove(+id);
  }
}
