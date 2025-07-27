import { HttpStatus, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { hashPassword } from "src/services/hash-password.services";
import * as bcrypt from 'bcrypt';

 export async function changePassword(userId, oldPassword: string, newPassword: string, userModel) {
     const user = await userModel.findById(userId);
     if (!user) { throw new NotFoundException('Người dùng không tồn tại'); }
     const isMatch = await bcrypt.compare(oldPassword, user.password);
     if (!isMatch) { throw new UnauthorizedException('Mật khẩu cũ không đúng'); }
     const hashedNewPassword = await hashPassword(newPassword);
     user.password = hashedNewPassword;
     await user.save();
     return { msg: 'Đổi mật khẩu thành công', status: HttpStatus.OK };
    }