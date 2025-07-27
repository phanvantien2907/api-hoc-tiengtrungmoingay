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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const register_dto_1 = require("./dto/register.dto");
const bcrypt = require("bcrypt");
const login_dto_1 = require("./dto/login.dto");
const refresh_token_schema_1 = require("./schema/refresh-token.schema");
const resert_token_schema_1 = require("./schema/resert-token.schema");
const jwt_1 = require("@nestjs/jwt");
const uuid_1 = require("uuid");
const nanoid_1 = require("nanoid");
const send_mail_services_1 = require("../services/send-mail.services");
const user_schema_1 = require("../users/schema/user.schema");
const hash_password_services_1 = require("../services/hash-password.services");
const change_password_services_1 = require("../services/change-password.services");
let AuthService = class AuthService {
    userModel;
    refreshModel;
    resetModel;
    mailerService;
    jwtService;
    constructor(userModel, refreshModel, resetModel, mailerService, jwtService) {
        this.userModel = userModel;
        this.refreshModel = refreshModel;
        this.resetModel = resetModel;
        this.mailerService = mailerService;
        this.jwtService = jwtService;
    }
    async register(registerData) {
        const exiting_users = await this.userModel.findOne({ username: registerData.username });
        if (exiting_users) {
            throw new common_1.NotFoundException('Người dùng đã tồn tại');
        }
        const hashedPassword = await bcrypt.hash(registerData.password, 10);
        await this.userModel.create({ username: registerData.username, fullname: registerData.fullname, email: registerData.email, password: hashedPassword });
        return { msg: 'Đăng ký thành công', status: common_1.HttpStatus.CREATED };
    }
    async login(loginData) {
        const exiting_users = await this.userModel.findOne({ username: loginData.username });
        if (!exiting_users) {
            throw new common_1.NotFoundException('Người dùng không tồn tại!');
        }
        const valid_password = await bcrypt.compare(loginData.password, exiting_users.password);
        if (!valid_password) {
            throw new common_1.UnauthorizedException('Mật khẩu không đúng');
        }
        if (!exiting_users.is_active) {
            throw new common_1.BadRequestException('Tài khoản đã bị khóa');
        }
        const token = await this.generatortoken(exiting_users._id.toString());
        return { msg: 'Đăng nhập thành công', ...token, status: common_1.HttpStatus.OK };
    }
    async logout(userId) {
        const token = await this.refreshModel.findOne({ userId });
        if (!token) {
            throw new common_1.NotFoundException('Người dùng không tồn tại');
        }
        await this.refreshModel.deleteOne({ userId });
        return { msg: 'Đăng xuất thành công', status: common_1.HttpStatus.NO_CONTENT };
    }
    async changePassword(userId, oldPassword, newPassword) {
        return await (0, change_password_services_1.changePassword)(userId, oldPassword, newPassword, this.userModel);
    }
    async forgetPassword(email) {
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new common_1.NotFoundException('Email không tồn tại');
        }
        const exp_date = new Date(Date.now() + 30 * 60 * 1000);
        const reset_token = (0, nanoid_1.nanoid)(64);
        await this.resetModel.create({ token: reset_token, userId: user._id.toString(), exp_date });
        this.mailerService.sendResetPasswordEmail(email, reset_token);
        return { msg: 'Đã gửi email đặt lại mật khẩu', link: `${process.env.LOCAL_URL}/${process.env.LOCAL_RESET_PASSWORD_PATH}/${reset_token}`, status: common_1.HttpStatus.OK };
    }
    async resetPassword(newPassword, token) {
        const find_token = await this.resetModel.findOne({ token: token, exp_date: { $gte: new Date() } });
        if (!find_token) {
            throw new common_1.UnauthorizedException('Token không hợp lệ hoặc đã hết hạn');
        }
        const hashedPassword = await (0, hash_password_services_1.hashPassword)(newPassword);
        await this.userModel.findByIdAndUpdate(find_token.userId, { password: hashedPassword });
        await this.resetModel.deleteOne({ token: token });
        return { msg: 'Đặt lại mật khẩu thành công', status: common_1.HttpStatus.OK };
    }
    async generatortoken(userId) {
        const access_token = await this.jwtService.signAsync({ userId }, { expiresIn: '1h', secret: process.env.JWT_SECRET });
        const refresh_token = (0, uuid_1.v4)();
        await this.refreshModel.findOneAndUpdate({ userId }, { userId, token: refresh_token, exp_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) }, { upsert: true, new: true });
        return { access_token, refresh_token, status: common_1.HttpStatus.OK };
    }
    async refreshtoken(rftoken) {
        const token = await this.refreshModel.findOne({ token: rftoken, exp_date: { $gt: new Date() } });
        if (!token) {
            throw new common_1.UnauthorizedException('Refresh token không hợp lệ hoặc đã hết hạn');
        }
        const access_token = await this.jwtService.signAsync({ userId: token.userId }, { expiresIn: '1h', secret: process.env.JWT_SECRET });
        return { access_token, status: common_1.HttpStatus.OK };
    }
};
exports.AuthService = AuthService;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDTO]),
    __metadata("design:returntype", Promise)
], AuthService.prototype, "register", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDTO]),
    __metadata("design:returntype", Promise)
], AuthService.prototype, "login", null);
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_2.InjectModel)(refresh_token_schema_1.RefreshToken.name)),
    __param(2, (0, mongoose_2.InjectModel)(resert_token_schema_1.ResetToken.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model,
        send_mail_services_1.SendMailService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map