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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVocabularyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_form_dto_1 = require("./create-form.dto");
class CreateVocabularyDto {
    simplified;
    radical;
    frequency;
    pos;
    forms;
    categories;
}
exports.CreateVocabularyDto = CreateVocabularyDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Chữ Hán thể phải là một chuỗi' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Chữ Hán không được để trống' }),
    (0, class_validator_1.MinLength)(1, { message: 'Chữ phải có ít nhất 1 ký tự' }),
    (0, swagger_1.ApiProperty)({ example: '爱', description: 'Chữ Hán thể của từ vựng' }),
    __metadata("design:type", String)
], CreateVocabularyDto.prototype, "simplified", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Bộ thủ thể phải là một chuỗi' }),
    (0, class_validator_1.MinLength)(1, { message: 'Bộ thủ phải có ít nhất 1 ký tự' }),
    (0, swagger_1.ApiProperty)({ example: '爫', description: 'Bộ thủ của từ vựng' }),
    __metadata("design:type", String)
], CreateVocabularyDto.prototype, "radical", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 150, description: 'Tần suất sử dụng từ vựng' }),
    __metadata("design:type", Number)
], CreateVocabularyDto.prototype, "frequency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['n', 'v'], description: 'Các loại từ của từ vựng' }),
    (0, class_validator_1.IsArray)({ message: 'Các lựa chọn phải là một mảng' }),
    (0, class_validator_1.ArrayMinSize)(2, { message: 'Phải có ít nhất 2 loại từ' }),
    __metadata("design:type", Array)
], CreateVocabularyDto.prototype, "pos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [create_form_dto_1.CreateFormDto], description: 'Các hình thức của từ vựng' }),
    (0, class_validator_1.IsArray)({ message: 'Các hình thức phải là một mảng' }),
    (0, class_validator_1.ArrayMinSize)(1, { message: 'Phải có ít nhất 1 hình thức' }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_form_dto_1.CreateFormDto),
    __metadata("design:type", Array)
], CreateVocabularyDto.prototype, "forms", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Danh mục thể phải là một chuỗi' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Danh mục không được để trống' }),
    (0, swagger_1.ApiProperty)({ example: 'HSK1', description: 'Danh mục của từ vựng' }),
    __metadata("design:type", String)
], CreateVocabularyDto.prototype, "categories", void 0);
//# sourceMappingURL=create-vocabulary.dto.js.map