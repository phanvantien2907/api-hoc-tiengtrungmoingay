import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropgressService } from './propgress.service';
import { CreatePropgressDto } from './dto/create-propgress.dto';
import { UpdatePropgressDto } from './dto/update-propgress.dto';

@Controller('propgress')
export class PropgressController {
  constructor(private readonly propgressService: PropgressService) {}

  @Post()
  create(@Body() createPropgressDto: CreatePropgressDto) {
    return this.propgressService.create(createPropgressDto);
  }

  @Get()
  findAll() {
    return this.propgressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propgressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropgressDto: UpdatePropgressDto) {
    return this.propgressService.update(+id, updatePropgressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propgressService.remove(+id);
  }
}
