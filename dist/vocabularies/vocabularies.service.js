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
    create(createVocabularyDto) {
        return 'This action adds a new vocabulary';
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
        return `This action updates a #${id} vocabulary`;
    }
    async remove(id) {
        await this.findVocabularyById(id);
        await this.vocabularyModel.updateOne({ _id: id }, { isDeleted: true, updatedAt: new Date() }).exec();
        return { status: common_1.HttpStatus.OK, msg: `Xóa từ vựng thành công` };
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