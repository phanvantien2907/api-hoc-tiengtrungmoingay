import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PropgressService } from './propgress.service';
import { CreatePropgressDto } from './dto/create-propgress.dto';
import { UpdatePropgressDto } from './dto/update-propgress.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { GuardsGuard } from 'src/guards/guards.guard';

@Controller('propgress')
export class PropgressController {
  constructor(private readonly propgressService: PropgressService) {}

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  create(@Body() createPropgressDto: CreatePropgressDto) {
    return this.propgressService.create(createPropgressDto);
  }

  @Get()
   @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  findAll() {
    return this.propgressService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  findOne(@Param('id') id: string) {
    return this.propgressService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  update(@Param('id') id: string, @Body() updatePropgressDto: UpdatePropgressDto) {
    return this.propgressService.update(+id, updatePropgressDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  remove(@Param('id') id: string) {
    return this.propgressService.remove(+id);
  }
}
