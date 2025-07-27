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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const category_schema_1 = require("./schema/category.schema");
const mongoose_2 = require("mongoose");
const slugify_1 = require("slugify");
let CategoriesService = class CategoriesService {
    categoryModel;
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async create(createCategoryDto) {
        const find_categories = await this.categoryModel.findOne({ name: createCategoryDto.name });
        if (find_categories) {
            throw new common_1.NotFoundException('Danh mục đã tồn tại');
        }
        const create_slug = (0, slugify_1.default)(createCategoryDto.name, { lower: true, strict: true });
        const new_categories = await this.categoryModel.create({
            ...createCategoryDto,
            slug: create_slug
        });
        return { msg: `Thêm mới danh mục ${new_categories.name} thành công`, status: common_1.HttpStatus.OK, data: new_categories };
    }
    async findAll() {
        const find_categories = await this.categoryModel.find().where({ is_deleted: false, is_active: true }).sort({ order: -1 }).select('-__v -is_deleted -is_active');
        if (find_categories.length === 0) {
            throw new common_1.NotFoundException('Không có bản ghi danh mục nào');
        }
        return { msg: `Lấy ra ${find_categories.length} danh sách danh mục thành công`, status: common_1.HttpStatus.OK, data: find_categories };
    }
    async findOne(id) {
        await this.findCategoryById(id);
        const result = await this.categoryModel.findOne().where({ is_deleted: false, is_active: true }).select('-__v -is_deleted -is_active');
        return { msg: `Lấy ra danh mục ${result?.name} thành công`, status: common_1.HttpStatus.OK, data: result };
    }
    async update(id, updateCategoryDto) {
        await this.findCategoryById(id);
        const update_categories = { ...updateCategoryDto, updatedAt: new Date() };
        await this.categoryModel.updateOne({ _id: id }, { $set: update_categories });
        return { msg: `Cập nhật danh mục ${update_categories.name} thành công`, status: common_1.HttpStatus.OK };
    }
    async remove(id) {
        await this.findCategoryById(id);
        const remove_categories = await this.categoryModel.findByIdAndUpdate(id, { is_deleted: true }).exec();
        return { msg: `Xóa danh mục ${remove_categories?.name} thành công`, status: common_1.HttpStatus.OK };
    }
    async findCategoryById(id) {
        const find_categoris_by_id = await this.categoryModel.findById(id);
        if (!find_categoris_by_id) {
            throw new common_1.NotFoundException('Danh mục không tồn tại');
        }
        return find_categoris_by_id;
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(category_schema_1.Categories.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map