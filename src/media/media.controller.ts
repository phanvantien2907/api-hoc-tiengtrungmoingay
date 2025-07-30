import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { GuardsGuard } from 'src/guards/guards.guard';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  create(@Body() createMediaDto: CreateMediaDto) {
    return this.mediaService.create(createMediaDto);
  }

  @Get()
  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  findAll() {
    return this.mediaService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  findOne(@Param('id') id: string) {
    return this.mediaService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  update(@Param('id') id: string, @Body() updateMediaDto: UpdateMediaDto) {
    return this.mediaService.update(+id, updateMediaDto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  remove(@Param('id') id: string) {
    return this.mediaService.remove(+id);
  }
}
