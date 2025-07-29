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
exports.VocabulariesService = void 0;
const common_1 = require("@nestjs/common");
const vocabulary_schema_1 = require("./schema/vocabulary.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const category_schema_1 = require("../categories/schema/category.schema");
let VocabulariesService = class VocabulariesService {
    vocabularyModel;
    categoryModel;
    constructor(vocabularyModel, categoryModel) {
        this.vocabularyModel = vocabularyModel;
        this.categoryModel = categoryModel;
    }
    async create(createVocabularyDto) {
        const find_vocabularies = await this.vocabularyModel.findOne({ simplified: createVocabularyDto.simplified });
        if (!find_vocabularies) {
            throw new common_1.NotFoundException('Từ vựng đã tồn tại');
        }
        const find_categories = await this.categoryModel.findOne({ name: createVocabularyDto.categories });
        if (!find_categories) {
            throw new common_1.NotFoundException('Danh mục không tồn tại');
        }
        const new_vocabularies = await this.vocabularyModel.create({ ...createVocabularyDto, categories: find_categories?._id });
        return { msg: `Thêm mới từ vựng ${new_vocabularies.simplified} thành công`, status: common_1.HttpStatus.CREATED, data: new_vocabularies };
    }
    async findAll(page, limit) {
        const find_vocabularies = await this.vocabularyModel.find().where({ is_deleted: false, is_active: true }).sort({ order: -1 }).select('-__v -is_deleted -is_active').populate('categories', 'name').skip((page - 1) * limit).limit(limit).exec();
        if (!find_vocabularies) {
            throw new Error('Không tìm thấy bản ghi nào');
        }
        return { status: common_1.HttpStatus.OK, msg: 'Lấy danh sách từ vựng thành công', data: find_vocabularies };
    }
    async findOne(id) {
        await this.findVocabularyById(id);
        const result = await this.vocabularyModel.findOne({ _id: id, is_deleted: false, is_active: true }).select('-__v -is_deleted -is_active').populate('categories', 'name').exec();
        if (!result) {
            throw new common_1.NotFoundException('Không tìm thấy từ vựng');
        }
        return { status: common_1.HttpStatus.OK, msg: 'Lấy từ vựng thành công', data: result };
    }
    async update(id, updateVocabularyDto) {
        await this.findVocabularyById(id);
        const find_vocabularies = await this.vocabularyModel.findOne({ _id: id, is_deleted: false, is_active: true }).select('-__v -is_deleted -is_active').populate('categories', 'name').exec();
        if (!find_vocabularies) {
            throw new common_1.NotFoundException('Không tìm thấy từ vựng');
        }
        if (updateVocabularyDto.categories) {
            const find_categories = await this.categoryModel.findOne({ name: updateVocabularyDto.categories });
            if (!find_categories) {
                throw new common_1.NotFoundException('Danh mục không tồn tại');
            }
            updateVocabularyDto.categories = find_categories._id.toString();
        }
        const update_vocabulary = { ...updateVocabularyDto, updatedAt: new Date(), };
        const result = await this.vocabularyModel.updateOne({ _id: id }, { $set: update_vocabulary });
        if (!result) {
            throw new common_1.NotFoundException('Cập nhật từ vựng không thành công');
        }
        return { msg: `Cập nhật từ vựng ${find_vocabularies?.simplified} thành công`, status: common_1.HttpStatus.OK, data: update_vocabulary };
    }
    async remove(id) {
        await this.findVocabularyById(id);
        const remove_vocabularies = await this.vocabularyModel.findByIdAndUpdate(id, { is_deleted: true, updatedAt: new Date() }).exec();
        if (!remove_vocabularies) {
            throw new common_1.NotFoundException('Xóa từ vựng không thành công');
        }
        return { msg: `Xóa từ vựng ${remove_vocabularies.simplified} thành công`, status: common_1.HttpStatus.NO_CONTENT };
    }
    async findVocabularyById(id) {
        if (!(0, mongoose_2.isValidObjectId)(id)) {
            throw new common_1.NotFoundException('Id không hợp lệ');
        }
        const exists = await this.vocabularyModel.exists({ _id: id, is_deleted: false, is_active: true });
        if (!exists) {
            throw new common_1.NotFoundException('Không tìm thấy từ vựng');
        }
    }
};
exports.VocabulariesService = VocabulariesService;
exports.VocabulariesService = VocabulariesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(vocabulary_schema_1.Vocabularies.name)),
    __param(1, (0, mongoose_1.InjectModel)(category_schema_1.Categories.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], VocabulariesService);
//# sourceMappingURL=vocabularies.service.js.map