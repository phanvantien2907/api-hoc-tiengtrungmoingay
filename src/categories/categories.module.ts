import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Categories, CategoriesSchema } from 'src/categories/schema/category.schema';

@Module({
  controllers: [CategoriesController],
  imports: [
    MongooseModule.forFeature([
      { name: Categories.name, schema: CategoriesSchema, collection: 'categories' },
    ]),
  ],
  providers: [CategoriesService],
})
export class CategoriesModule {}
