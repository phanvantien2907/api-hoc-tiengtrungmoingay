"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const category_schema_1 = require("../categories/schema/category.schema");
const quiz_schema_1 = require("./schema/quiz.schema");
const slugify_1 = require("slugify");
let QuizService = class QuizService {
    categoryModel;
    quizModel;
    constructor(categoryModel, quizModel) {
        this.categoryModel = categoryModel;
        this.quizModel = quizModel;
    }
    async create(createQuizDto) {
        const find_quiz = await this.quizModel.findOne({ title: createQuizDto.title });
        if (find_quiz) {
            throw new common_1.NotFoundException('Câu hỏi đã tồn tại');
        }
        const create_slug = (0, slugify_1.default)(createQuizDto.title, { lower: true, strict: true });
        const categories = await this.categoryModel.findOne({ name: createQuizDto.categories });
        if (!categories) {
            throw new common_1.NotFoundException('Danh mục không tồn tại');
        }
        const new_quiz = await this.quizModel.create({
            ...createQuizDto,
            slug: create_slug,
            categories: categories.id,
        });
        return { msg: `Thêm mới quiz ${new_quiz.title} thành công`, status: common_1.HttpStatus.OK, data: new_quiz };
    }
    async findAll() {
        const quizzes = await this.quizModel.find({ is_active: true, is_deleted: false }).select('-is_active -is_deleted').populate('categories', 'name');
        if (!quizzes || quizzes.length === 0) {
            throw new common_1.NotFoundException('Không có quiz nào');
        }
        return { msg: `Lấy ${quizzes.length} danh sách quiz thành công`, status: common_1.HttpStatus.OK, data: quizzes };
    }
    async findOne(id) {
        await this.findQuizByID(id);
        const result = await this.quizModel.findById(id).where({ is_active: true, is_deleted: false }).select('-is_active -is_deleted').populate('categories', 'name');
        if (!result) {
            throw new common_1.NotFoundException('Quiz không tồn tại');
        }
        return { msg: `Lấy ra quiz ${result?.title} thành công`, status: common_1.HttpStatus.OK, data: result };
    }
    async update(id, updateQuizDto) {
        await this.findQuizByID(id);
        const find_quiz = await this.quizModel.findById(id).where({ is_active: true, is_deleted: false }).select('-is_active -is_deleted').populate('categories', 'name');
        if (!find_quiz) {
            throw new common_1.NotFoundException('Quiz không tồn tại');
        }
        const update_slug = (0, slugify_1.default)(updateQuizDto.title ?? '', { lower: true, strict: true });
        if (updateQuizDto.categories) {
            const find_categories = await this.categoryModel.findOne({ name: updateQuizDto.categories });
            if (!find_categories) {
                throw new common_1.NotFoundException('Danh mục không tồn tại');
            }
        }
        const update_quiz = { ...updateQuizDto, slug: update_slug, updatedAt: new Date() };
        const result = await this.quizModel.updateOne({ _id: id }, { $set: update_quiz });
        if (!result) {
            throw new common_1.BadRequestException('Cập nhật quiz không thành công');
        }
        return { msg: `Cập nhật quiz ${updateQuizDto.title} thành công`, status: common_1.HttpStatus.OK, data: update_quiz };
    }
    async remove(id) {
        await this.findQuizByID(id);
        const remove_quiz = await this.quizModel.findByIdAndUpdate(id, { is_deleted: true, updatedAt: new Date() }).exec();
        if (!remove_quiz) {
            throw new common_1.BadRequestException('Xóa quiz không thành công');
        }
        return { msg: `Xóa quiz ${remove_quiz.title} thành công`, status: common_1.HttpStatus.NO_CONTENT };
    }
    async findQuizByID(categoryId) {
        const find_quiz_by_id = await this.quizModel.findById(categoryId);
        if (!find_quiz_by_id) {
            throw new common_1.NotFoundException('Quiz không tồn tại');
        }
        return find_quiz_by_id;
    }
};
exports.QuizService = QuizService;
exports.QuizService = QuizService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(category_schema_1.Categories.name)),
    __param(1, (0, mongoose_2.InjectModel)(quiz_schema_1.Quiz.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], QuizService);
//# sourceMappingURL=quiz.service.js.map