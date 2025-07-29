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
exports.CreateQuestionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateQuestionDto {
    question_text;
    options;
    answer;
}
exports.CreateQuestionDto = CreateQuestionDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Câu hỏi phải là một chuỗi' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Câu hỏi không được để trống' }),
    (0, class_validator_1.MinLength)(3, { message: 'Câu hỏi phải có ít nhất 3 ký tự' }),
    (0, swagger_1.ApiProperty)({ example: 'Bạn ăn cơm chưa?' }),
    __metadata("design:type", String)
], CreateQuestionDto.prototype, "question_text", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: 'Các lựa chọn phải là một mảng' }),
    (0, class_validator_1.ArrayMinSize)(2, { message: 'Phải có ít nhất 2 lựa chọn' }),
    (0, swagger_1.ApiProperty)({ example: ['爸爸', '妈妈', '哥哥'] }),
    __metadata("design:type", Array)
], CreateQuestionDto.prototype, "options", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Đáp án đúng phải là một chuỗi' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Đáp án không được để trống' }),
    (0, swagger_1.ApiProperty)({ example: 'Tôi ăn rồi' }),
    __metadata("design:type", String)
], CreateQuestionDto.prototype, "answer", void 0);
//# sourceMappingURL=create-question.dto.js.map