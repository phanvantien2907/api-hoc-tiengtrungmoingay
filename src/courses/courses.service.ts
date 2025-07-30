import { Injectable, UseGuards } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { GuardsGuard } from 'src/guards/guards.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Injectable()
export class CoursesService {
  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  create(createCourseDto: CreateCourseDto) {
    return 'This action adds a new course';
  }

  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  findAll() {
    return `This action returns all courses`;
  }

  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
