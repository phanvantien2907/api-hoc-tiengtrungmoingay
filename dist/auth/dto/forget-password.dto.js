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
exports.ForgetPasswordDTO = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class ForgetPasswordDTO {
    email;
}
exports.ForgetPasswordDTO = ForgetPasswordDTO;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Email không được để trống' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Email không hợp lệ' }),
    (0, swagger_1.ApiProperty)({ description: 'Nhập email của bạn', example: 'tiendeptrai@gmail.com' }),
    __metadata("design:type", String)
], ForgetPasswordDTO.prototype, "email", void 0);
//# sourceMappingURL=forget-password.dto.js.map