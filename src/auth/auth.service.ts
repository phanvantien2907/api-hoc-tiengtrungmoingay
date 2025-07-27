import { BadRequestException, Body, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDTO } from 'src/auth/dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDTO } from 'src/auth/dto/login.dto';
import { RefreshToken } from 'src/auth/schema/refresh-token.schema';
import { ResetToken } from 'src/auth/schema/resert-token.schema';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';
import { SendMailService } from 'src/services/send-mail.services';
import { User } from 'src/users/schema/user.schema';
import { hashPassword } from 'src/services/hash-password.services';
import { changePassword } from 'src/services/change-password.services';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>,
  @InjectModel(RefreshToken.name) private refreshModel: Model<RefreshToken>,
   @InjectModel(ResetToken.name) private resetModel: Model<ResetToken>,
   private readonly mailerService: SendMailService,
   private jwtService: JwtService
) {}

   async register(@Body() registerData: RegisterDTO) {
   const exiting_users = await this.userModel.findOne({ username: registerData.username});
   if(exiting_users) { throw new NotFoundException('Người dùng đã tồn tại'); }
   const hashedPassword = await bcrypt.hash(registerData.password, 10);
  await this.userModel.create({username: registerData.username, fullname: registerData.fullname, email: registerData.email , password: hashedPassword});
   return {msg: 'Đăng ký thành công', status: HttpStatus.CREATED};
  }

   async login(@Body() loginData: LoginDTO) {
    const exiting_users = await this.userModel.findOne({username: loginData.username});
    if(!exiting_users) { throw new NotFoundException('Người dùng không tồn tại!') }
    const valid_password = await bcrypt.compare(loginData.password, exiting_users.password);
    if(!valid_password) { throw new UnauthorizedException('Mật khẩu không đúng'); }
    if(!exiting_users.is_active) { throw new BadRequestException('Tài khoản đã bị khóa'); }
    const token = await this.generatortoken(exiting_users._id.toString());
    return {msg: 'Đăng nhập thành công', ...token, status: HttpStatus.OK};
  }

  async logout(userId: string) {
    const token = await this.refreshModel.findOne({ userId });
    if(!token) { throw new NotFoundException('Người dùng không tồn tại'); }
    await this.refreshModel.deleteOne({userId});
    return { msg: 'Đăng xuất thành công', status: HttpStatus.NO_CONTENT };
  }

  async changePassword(userId, oldPassword: string, newPassword: string) {
    return await changePassword(userId, oldPassword, newPassword, this.userModel);
   }

   async forgetPassword(email: string) {
    const user = await this.userModel.findOne({email});
    if (!user) { throw new NotFoundException('Email không tồn tại'); }
    const exp_date = new Date(Date.now() +  30 * 60 * 1000);
    const reset_token = nanoid(64);
    await this.resetModel.create({ token: reset_token, userId: user._id.toString(), exp_date });
   this.mailerService.sendResetPasswordEmail(email, reset_token);
    return { msg: 'Đã gửi email đặt lại mật khẩu', link: `${process.env.LOCAL_URL}/${process.env.LOCAL_RESET_PASSWORD_PATH}/${reset_token}`, status: HttpStatus.OK };
  }

    async resetPassword(newPassword: string, token: string) {
    const find_token = await this.resetModel.findOne({ token: token, exp_date: { $gte: new Date() } });
    if(!find_token) { throw new UnauthorizedException('Token không hợp lệ hoặc đã hết hạn'); }
    const hashedPassword = await hashPassword(newPassword);
    await this.userModel.findByIdAndUpdate(find_token.userId, { password: hashedPassword });
    await this.resetModel.deleteOne({ token: token });
    return { msg: 'Đặt lại mật khẩu thành công', status: HttpStatus.OK };
  }

    async generatortoken(userId: string) {
    const access_token = await this.jwtService.signAsync({ userId }, {expiresIn: '1h', secret: process.env.JWT_SECRET});
    const refresh_token = uuidv4();
    await this.refreshModel.findOneAndUpdate({ userId}, {userId, token: refresh_token, exp_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}, {upsert: true, new: true});
    return { access_token, refresh_token, status: HttpStatus.OK };
  }

   async refreshtoken(rftoken: string) {
    const token = await this.refreshModel.findOne({ token: rftoken,  exp_date: { $gt: new Date() } });
    if (!token) { throw new UnauthorizedException('Refresh token không hợp lệ hoặc đã hết hạn'); }
   const access_token = await this.jwtService.signAsync({ userId: token.userId }, {expiresIn: '1h', secret: process.env.JWT_SECRET});
    return { access_token, status: HttpStatus.OK };
  }

}
