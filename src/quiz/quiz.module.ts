import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Quiz, QuizSchema } from 'src/quiz/schema/quiz.schema';
import { Categories, CategoriesSchema } from 'src/categories/schema/category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Quiz.name, schema: QuizSchema, collection: 'quiz' },
      { name: Categories.name, schema: CategoriesSchema, collection: 'categories' }
    ]),
  ],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
