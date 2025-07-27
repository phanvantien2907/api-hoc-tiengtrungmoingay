"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = changePassword;
const common_1 = require("@nestjs/common");
const hash_password_services_1 = require("./hash-password.services");
const bcrypt = require("bcrypt");
async function changePassword(userId, oldPassword, newPassword, userModel) {
    const user = await userModel.findById(userId);
    if (!user) {
        throw new common_1.NotFoundException('Người dùng không tồn tại');
    }
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
        throw new common_1.UnauthorizedException('Mật khẩu cũ không đúng');
    }
    const hashedNewPassword = await (0, hash_password_services_1.hashPassword)(newPassword);
    user.password = hashedNewPassword;
    await user.save();
    return { msg: 'Đổi mật khẩu thành công', status: common_1.HttpStatus.OK };
}
//# sourceMappingURL=change-password.services.js.map