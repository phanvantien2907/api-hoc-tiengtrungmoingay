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
exports.CreateQuizDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_question_dto_1 = require("./create-question.dto");
class CreateQuizDto {
    title;
    description;
    categories;
    questions;
}
exports.CreateQuizDto = CreateQuizDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Tên quiz phải là một chuỗi' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Tên quiz không được để trống' }),
    (0, class_validator_1.MinLength)(3, { message: 'Tên quiz phải có ít nhất 3 ký tự' }),
    (0, swagger_1.ApiProperty)({ description: 'Tên danh mục', example: 'Bài kiểm tra từ vựng HSK1' }),
    __metadata("design:type", String)
], CreateQuizDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Đây là mô tả ngắn gọn cho danh mục', example: 'mô tả về quiz nhé' }),
    __metadata("design:type", String)
], CreateQuizDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Danh mục không được để trống' }),
    (0, class_validator_1.IsString)({ message: 'Danh mục phải là một chuỗi' }),
    (0, class_validator_1.MinLength)(3, { message: 'Danh mục phải có ít nhất 3 ký tự' }),
    (0, swagger_1.ApiProperty)({ description: 'Tên danh mục', example: 'HSK1' }),
    __metadata("design:type", String)
], CreateQuizDto.prototype, "categories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Danh sách câu hỏi', type: [create_question_dto_1.CreateQuestionDto] }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.ArrayMinSize)(1, { message: 'Phải có ít nhất một câu hỏi' }),
    (0, class_validator_1.IsArray)({ message: 'Câu hỏi phải là một mảng' }),
    (0, class_transformer_1.Type)(() => create_question_dto_1.CreateQuestionDto),
    __metadata("design:type", Array)
], CreateQuizDto.prototype, "questions", void 0);
//# sourceMappingURL=create-quiz.dto.js.map