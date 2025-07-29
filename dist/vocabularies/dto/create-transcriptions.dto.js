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
exports.TranscriptionsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class TranscriptionsDto {
    pinyin;
    numeric;
    wadegiles;
    bopomofo;
    romatzyh;
}
exports.TranscriptionsDto = TranscriptionsDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'dōng xi', description: 'Phiên âm của từ vựng' }),
    __metadata("design:type", String)
], TranscriptionsDto.prototype, "pinyin", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'dong1 xi5', description: 'Phiên âm số của từ vựng' }),
    __metadata("design:type", String)
], TranscriptionsDto.prototype, "numeric", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'tung¹ xi', description: 'Phiên âm có dấu của từ vựng' }),
    __metadata("design:type", String)
], TranscriptionsDto.prototype, "wadegiles", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'ㄉㄨㄥ xi', description: 'Phiên âm Bopomofo của từ vựng' }),
    __metadata("design:type", String)
], TranscriptionsDto.prototype, "bopomofo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'dong xi', description: 'Phiên âm Romatzyh của từ vựng' }),
    __metadata("design:type", String)
], TranscriptionsDto.prototype, "romatzyh", void 0);
//# sourceMappingURL=create-transcriptions.dto.js.map