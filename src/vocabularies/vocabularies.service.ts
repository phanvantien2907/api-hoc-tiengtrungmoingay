import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVocabularyDto } from './dto/create-vocabulary.dto';
import { UpdateVocabularyDto } from './dto/update-vocabulary.dto';
import { Vocabularies } from 'src/vocabularies/schema/vocabulary.schema';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Categories } from 'src/categories/schema/category.schema';

@Injectable()
export class VocabulariesService {
  constructor(@InjectModel(Vocabularies.name) private vocabularyModel: Model<Vocabularies>,
  @InjectModel(Categories.name) private categoryModel: Model<Categories>) {}
  create(createVocabularyDto: CreateVocabularyDto) {
    return 'This action adds a new vocabulary';
  }

 async findAll(page: number, limit: number) {
   const find_vocabularies = await this.vocabularyModel.find().where({ is_deleted: false, is_active: true }).sort({ order: -1 }).select('-__v -is_deleted -is_active').populate('categories', 'name').skip((page - 1) * limit).limit(limit).exec();
   if(!find_vocabularies) { throw new Error('Không tìm thấy bản ghi nào'); }
   return {status: HttpStatus.OK, msg: 'Lấy danh sách từ vựng thành công', data: find_vocabularies};
  }

 async findOne(id: string) {
    await this.findVocabularyById(id);
    const result = await this.vocabularyModel.findOne({_id: id,  is_deleted: false, is_active: true}).select('-__v -is_deleted -is_active').populate('categories', 'name').exec();
    if(!result) { throw new NotFoundException('Không tìm thấy từ vựng'); }
    return {status: HttpStatus.OK, msg: 'Lấy từ vựng thành công', data: result};
  }

 async update(id: string, updateVocabularyDto: UpdateVocabularyDto) {
    return `This action updates a #${id} vocabulary`;
  }

 async remove(id: string) {
  await this.findVocabularyById(id);
   await this.vocabularyModel.updateOne({_id: id}, {isDeleted: true, updatedAt: new Date()}).exec();
  return {status: HttpStatus.OK, msg: `Xóa từ vựng thành công`};
  }

  async findVocabularyById(id: string) {
   if(!isValidObjectId(id)) {  throw new NotFoundException('Id không hợp lệ');}
   const exists = await this.vocabularyModel.exists({_id: id, is_deleted: false, is_active: true});
   if(!exists) { throw new NotFoundException('Không tìm thấy từ vựng');}
  }
}
