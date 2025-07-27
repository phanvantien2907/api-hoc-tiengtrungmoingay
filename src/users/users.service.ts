import {HttpStatus, Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schema/user.schema';
import * as bcrypt from 'bcrypt';
import { changePassword } from 'src/services/change-password.services';
import { ResetToken } from 'src/auth/schema/resert-token.schema';
import { SendMailService } from 'src/services/send-mail.services';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>,
   @InjectModel(ResetToken.name) private resetModel: Model<ResetToken>,
   private readonly mailerService: SendMailService,
  ) {}

  async profile(userId: string) {
  const find_user = await this.userModel.findOne({_id: userId, is_active: true, is_deleted: false}).select('-password -__v -is_active -is_deleted');
  if(!find_user) { throw new NotFoundException('Người dùng không tồn tại'); }
    return {success: HttpStatus.OK, msg: 'Lấy thông tin cá nhân thành công', data: find_user};
  }

   async changePassword(userId, oldPassword: string, newPassword: string) {
    return await changePassword( userId, oldPassword, newPassword, this.userModel);
    }

    async updateProfile(userId: string, body: UpdateUserDto) {
     const update_user: any = {...body, updatedAt: new Date()};
     await this.userModel.updateOne({_id: userId}, {$set: update_user});
      return { success: HttpStatus.OK, msg: 'Cập nhật thông tin cá nhân thành công' };
    }

}
