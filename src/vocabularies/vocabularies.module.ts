import { Module } from '@nestjs/common';
import { VocabulariesService } from './vocabularies.service';
import { VocabulariesController } from './vocabularies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vocabularies, VocabulariesSchema } from 'src/vocabularies/schema/vocabulary.schema';
import { Categories, CategoriesSchema } from 'src/categories/schema/category.schema';

@Module({
 imports: [
    MongooseModule.forFeature([
      { name: Vocabularies.name, schema: VocabulariesSchema, collection: 'vocabularies' },
      { name: Categories.name, schema: CategoriesSchema, collection: 'categories' }
    ]),
  ],
  controllers: [VocabulariesController],
  providers: [VocabulariesService],
})
export class VocabulariesModule {}
