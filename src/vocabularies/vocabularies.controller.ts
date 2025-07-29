import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, UseFilters, Put } from '@nestjs/common';
import { VocabulariesService } from './vocabularies.service';
import { CreateVocabularyDto } from './dto/create-vocabulary.dto';
import { UpdateVocabularyDto } from './dto/update-vocabulary.dto';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { GuardsGuard } from 'src/guards/guards.guard';

@Controller('vocabularies')
export class VocabulariesController {
  constructor(private readonly vocabulariesService: VocabulariesService) {}

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  create(@Body() createVocabularyDto: CreateVocabularyDto) {
    return this.vocabulariesService.create(createVocabularyDto);
  }

  @Get()
   @ApiBearerAuth('access-token')
    @UseGuards(GuardsGuard)
    @ApiOperation({ summary: 'Lấy danh sách từ vựng' })
  findAll(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.vocabulariesService.findAll(+page, +limit);
  }

  @Get(':id')
   @ApiBearerAuth('access-token')
    @UseGuards(GuardsGuard)
  findOne(@Param('id') id: string) {
    return this.vocabulariesService.findOne(id);
  }

  @Patch('update/:id')
   @ApiBearerAuth('access-token')
    @UseGuards(GuardsGuard)
  update(@Param('id') id: string, @Body() updateVocabularyDto: UpdateVocabularyDto) {
    return this.vocabulariesService.update(id, updateVocabularyDto);
  }

  @Put('delete/:id')
   @ApiBearerAuth('access-token')
    @UseGuards(GuardsGuard)
  remove(@Param('id') id: string) {
    return this.vocabulariesService.remove(id);
  }
}
