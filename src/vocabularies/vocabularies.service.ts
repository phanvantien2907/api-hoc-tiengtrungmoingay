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
  async create(createVocabularyDto: CreateVocabularyDto) {
    const find_vocabularies = await this.vocabularyModel.findOne({ simplified: createVocabularyDto.simplified });
    if(!find_vocabularies) { throw new NotFoundException('Từ vựng đã tồn tại');  }
     const find_categories = await this.categoryModel.findOne({ name: createVocabularyDto.categories });
    if(!find_categories) { throw new NotFoundException('Danh mục không tồn tại'); }
    const new_vocabularies = await this.vocabularyModel.create({...createVocabularyDto, categories: find_categories?._id});
    return { msg: `Thêm mới từ vựng ${new_vocabularies.simplified} thành công`, status: HttpStatus.CREATED, data: new_vocabularies };
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
   await this.findVocabularyById(id);
    const find_vocabularies = await this.vocabularyModel.findOne({_id: id, is_deleted: false, is_active: true}).select('-__v -is_deleted -is_active').populate('categories', 'name').exec();
    if(!find_vocabularies) { throw new NotFoundException('Không tìm thấy từ vựng'); }
    if(updateVocabularyDto.categories) {
      const find_categories = await this.categoryModel.findOne({ name: updateVocabularyDto.categories });
      if(!find_categories) { throw new NotFoundException('Danh mục không tồn tại'); }
      updateVocabularyDto.categories = find_categories._id.toString();
    }
    const update_vocabulary: any = { ...updateVocabularyDto, updatedAt: new Date(), };
    const result = await this.vocabularyModel.updateOne({_id: id}, { $set: update_vocabulary });
    if(!result) { throw new NotFoundException('Cập nhật từ vựng không thành công'); }
    return { msg: `Cập nhật từ vựng ${find_vocabularies?.simplified} thành công`, status: HttpStatus.OK, data: update_vocabulary };
  }

 async remove(id: string) {
  await this.findVocabularyById(id);
    const remove_vocabularies = await this.vocabularyModel.findByIdAndUpdate(id, { is_deleted: true, updatedAt: new Date() }).exec();
    if(!remove_vocabularies) { throw new NotFoundException('Xóa từ vựng không thành công'); }
    return { msg: `Xóa từ vựng ${remove_vocabularies.simplified} thành công`, status: HttpStatus.NO_CONTENT };
  }

  async findVocabularyById(id: string) {
   if(!isValidObjectId(id)) {  throw new NotFoundException('Id không hợp lệ');}
   const exists = await this.vocabularyModel.exists({_id: id, is_deleted: false, is_active: true});
   if(!exists) { throw new NotFoundException('Không tìm thấy từ vựng');}
  }
}
