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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
const guards_guard_1 = require("../guards/guards.guard");
const chage_password_dto_1 = require("../auth/dto/chage-password.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
let UsersController = class UsersController {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    profile(req) {
        const user_id = req['user'].userId;
        return this.usersService.profile(user_id);
    }
    changePassword(req, body) {
        const user_id = req['user'].userId;
        return this.usersService.changePassword(user_id, body.oldPassword, body.newPassword);
    }
    updateProfile(req, body) {
        const user_id = req['user'].userId;
        return this.usersService.updateProfile(user_id, body);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)('profile'),
    (0, swagger_1.ApiOperation)({ summary: 'Lấy thông tin cá nhân' }),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(guards_guard_1.GuardsGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "profile", null);
__decorate([
    (0, common_1.Post)('change-password'),
    (0, swagger_1.ApiOperation)({ summary: 'Thay đổi mật khẩu' }),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(guards_guard_1.GuardsGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, chage_password_dto_1.ChangePasswordDTO]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('update-profile'),
    (0, swagger_1.ApiOperation)({ summary: 'Cập nhật thông tin cá nhân' }),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(guards_guard_1.GuardsGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateProfile", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map