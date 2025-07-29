import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Categories } from 'src/categories/schema/category.schema';
import { Model } from 'mongoose';
import slugify from 'slugify';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Categories.name) private categoryModel: Model<Categories>) {}
 async create(createCategoryDto: CreateCategoryDto) {
   const find_categories = await this.categoryModel.findOne({ name: createCategoryDto.name });
   if(find_categories) { throw new NotFoundException('Danh mục đã tồn tại'); }
   const create_slug = slugify(createCategoryDto.name, { lower: true, strict: true });
    const new_categories = await this.categoryModel.create({
      ...createCategoryDto,
      slug: create_slug
    })
    return { msg: `Thêm mới danh mục ${new_categories.name} thành công`, status: HttpStatus.OK, data: new_categories };
  }

 async findAll() {
    const find_categories = await this.categoryModel.find().where({ is_deleted: false, is_active: true }).sort({ order: -1 }).select('-__v -is_deleted -is_active');
    if(find_categories.length === 0) { throw new NotFoundException('Không có bản ghi danh mục nào'); }
    return { msg: `Lấy ra ${find_categories.length} danh sách danh mục thành công`, status: HttpStatus.OK, data: find_categories };
  }

  async findOne(id: string) {
    await this.findCategoryById(id);
     const result = await this.categoryModel.findOne().where({ is_deleted: false, is_active: true }).select('-__v -is_deleted -is_active');
     return { msg: `Lấy ra danh mục ${result?.name} thành công`, status: HttpStatus.OK, data: result };
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    await this.findCategoryById(id);
    const update_categories: any = { ...updateCategoryDto, updatedAt: new Date() };
    await this.categoryModel.updateOne({ _id: id }, { $set: update_categories });
    return { msg: `Cập nhật danh mục ${update_categories.name} thành công`, status: HttpStatus.OK };
  }

  async remove(id: string) {
    await this.findCategoryById(id);
    const remove_categories = await this.categoryModel.findByIdAndUpdate(id, { is_deleted: true }).exec();
    return { msg: `Xóa danh mục ${remove_categories?.name} thành công`, status: HttpStatus.NO_CONTENT };
  }

  async findCategoryById(id: string) {
    const find_categoris_by_id = await this.categoryModel.findById(id);
    if(!find_categoris_by_id) {throw new NotFoundException('Danh mục không tồn tại');}
    return find_categoris_by_id;
  }
}
