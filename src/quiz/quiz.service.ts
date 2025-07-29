import { BadRequestException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Categories } from 'src/categories/schema/category.schema';
import { Quiz } from 'src/quiz/schema/quiz.schema';
import slugify from 'slugify';

@Injectable()
export class QuizService {
 constructor(@InjectModel(Categories.name) private categoryModel: Model<Categories>,
 @InjectModel(Quiz.name) private quizModel: Model<Quiz>,
) {}

 async create(createQuizDto: CreateQuizDto) {
   const find_quiz = await this.quizModel.findOne({ title: createQuizDto.title });
   if(find_quiz) { throw new NotFoundException('Câu hỏi đã tồn tại'); }
   const create_slug = slugify(createQuizDto.title, { lower: true, strict: true });
    const categories = await this.categoryModel.findOne({ name: createQuizDto.categories });
    if (!categories) {
      throw new NotFoundException('Danh mục không tồn tại');
    }
    const new_quiz = await this.quizModel.create({
      ...createQuizDto,
      slug: create_slug,
      categories: categories.id,
    })
    return { msg: `Thêm mới quiz ${new_quiz.title} thành công`, status: HttpStatus.OK, data: new_quiz };
  }

 async findAll() {
   const quizzes = await this.quizModel.find({is_active: true, is_deleted: false}).select('-is_active -is_deleted').populate('categories', 'name');
   if(!quizzes || quizzes.length === 0) { throw new NotFoundException('Không có quiz nào'); }
   return { msg: `Lấy ${quizzes.length} danh sách quiz thành công`, status: HttpStatus.OK, data: quizzes };
  }

 async findOne(id: string) {
    await this.findQuizByID(id);
    const result = await this.quizModel.findById(id).where({ is_active: true, is_deleted: false }).select('-is_active -is_deleted').populate('categories', 'name');
    if(!result) { throw new NotFoundException('Quiz không tồn tại');    }
     return { msg: `Lấy ra quiz ${result?.title} thành công`, status: HttpStatus.OK, data: result };
  }

 async update(id: string, updateQuizDto: UpdateQuizDto) {
   await this.findQuizByID(id);
   const find_quiz = await this.quizModel.findById(id).where({ is_active: true, is_deleted: false }).select('-is_active -is_deleted').populate('categories', 'name');
    if(!find_quiz) { throw new NotFoundException('Quiz không tồn tại'); }
   const update_slug = slugify(updateQuizDto.title ?? '', { lower: true, strict: true });
   if(updateQuizDto.categories) {
    const find_categories = await this.categoryModel.findOne({ name: updateQuizDto.categories });
   if (!find_categories) { throw new NotFoundException('Danh mục không tồn tại'); }
   }
   const update_quiz: any = { ...updateQuizDto, slug: update_slug, updatedAt: new Date() };
   const result = await this.quizModel.updateOne({ _id: id }, { $set: update_quiz });
   if (!result) { throw new BadRequestException('Cập nhật quiz không thành công'); }
   return { msg: `Cập nhật quiz ${updateQuizDto.title} thành công`, status: HttpStatus.OK, data: update_quiz };
  }

  async remove(id: string) {
   await this.findQuizByID(id);
   const remove_quiz = await this.quizModel.findByIdAndUpdate(id, { is_deleted: true, updatedAt: new Date() }).exec();
   if (!remove_quiz) { throw new BadRequestException('Xóa quiz không thành công'); }
   return { msg: `Xóa quiz ${remove_quiz.title} thành công`, status: HttpStatus.NO_CONTENT };
  }

  async findQuizByID(categoryId: string) {
    const find_quiz_by_id = await this.quizModel.findById(categoryId);
    if(!find_quiz_by_id) { throw new NotFoundException('Quiz không tồn tại'); }
    return find_quiz_by_id;
  }
}
