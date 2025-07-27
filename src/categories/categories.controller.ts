import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiBearerAuth, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { GuardsGuard } from 'src/guards/guards.guard';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiOperation({ summary: 'Tạo danh mục mới' })
  @ApiBearerAuth('access-token')
   @UseGuards(GuardsGuard)
  create(@Body() createCategoryDto: CreateCategoryDto) {
  return this.categoriesService.create(createCategoryDto);
  }

  @Get()
   @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  @ApiOperation({ summary: 'Lấy danh sách danh mục' })
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
   @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
   @ApiOperation({ summary: 'Lấy thông tin danh mục theo ID' })
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  @Patch(':id/update')
   @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  @ApiOperation({ summary: 'Cập nhật thông tin danh mục' })
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @Put(':id/delete')
   @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  @ApiOperation({summary: 'Xóa danh mục'})
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(id);
  }
}
