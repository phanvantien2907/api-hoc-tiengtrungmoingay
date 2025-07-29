import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { ApiBearerAuth, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { GuardsGuard } from 'src/guards/guards.guard';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  @ApiOperation({ summary: 'Tạo quiz mới' })
  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizService.create(createQuizDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lấy danh sách quiz' })
  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  findAll() {
    return this.quizService.findAll();
  }

  @Get(':id')
  @ApiProperty({ description: 'Lấy quiz theo ID' })
  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  findOne(@Param('id') id: string) {
  return this.quizService.findOne(id);
  }

  @Patch('update/:id')
  @ApiOperation({ summary: 'Cập nhật quiz' })
  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
    return this.quizService.update(id, updateQuizDto);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Xoá quiz' })
  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  remove(@Param('id') id: string) {
    return this.quizService.remove(id);
  }
}
