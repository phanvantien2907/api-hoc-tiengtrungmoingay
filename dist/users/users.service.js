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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./schema/user.schema");
const change_password_services_1 = require("../services/change-password.services");
const resert_token_schema_1 = require("../auth/schema/resert-token.schema");
const send_mail_services_1 = require("../services/send-mail.services");
let UsersService = class UsersService {
    userModel;
    resetModel;
    mailerService;
    constructor(userModel, resetModel, mailerService) {
        this.userModel = userModel;
        this.resetModel = resetModel;
        this.mailerService = mailerService;
    }
    async profile(userId) {
        const find_user = await this.userModel.findOne({ _id: userId, is_active: true, is_deleted: false }).select('-password -__v -is_active -is_deleted');
        if (!find_user) {
            throw new common_1.NotFoundException('Người dùng không tồn tại');
        }
        return { success: common_1.HttpStatus.OK, msg: 'Lấy thông tin cá nhân thành công', data: find_user };
    }
    async changePassword(userId, oldPassword, newPassword) {
        return await (0, change_password_services_1.changePassword)(userId, oldPassword, newPassword, this.userModel);
    }
    async updateProfile(userId, body) {
        const update_user = { ...body, updatedAt: new Date() };
        await this.userModel.updateOne({ _id: userId }, { $set: update_user });
        return { success: common_1.HttpStatus.OK, msg: 'Cập nhật thông tin cá nhân thành công' };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(resert_token_schema_1.ResetToken.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        send_mail_services_1.SendMailService])
], UsersService);
//# sourceMappingURL=users.service.js.map