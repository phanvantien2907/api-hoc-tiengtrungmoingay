import { Controller, Get, Post, Patch, Param, Delete, UseGuards, Req, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GuardsGuard } from 'src/guards/guards.guard';
import { ChangePasswordDTO } from 'src/auth/dto/chage-password.dto';
import { ResetPasswordDTO } from 'src/auth/dto/resert-password.dto';
import { ForgetPasswordDTO } from 'src/auth/dto/forget-password.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@ApiTags('User')
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService ) {}

  @Get('profile')
  @ApiOperation({ summary: 'Lấy thông tin cá nhân' })
  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  profile(@Req() req:Request) {
    const user_id = req['user'].userId;
    return this.usersService.profile(user_id);
  }

  @Post('change-password')
  @ApiOperation({ summary: 'Thay đổi mật khẩu' })
  @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  changePassword(@Req() req: Request, @Body() body: ChangePasswordDTO) {
    const user_id = req['user'].userId;
    return this.usersService.changePassword(user_id, body.oldPassword, body.newPassword);
  }

  @Patch('update-profile')
  @ApiOperation({ summary: 'Cập nhật thông tin cá nhân' })
   @ApiBearerAuth('access-token')
  @UseGuards(GuardsGuard)
  updateProfile(@Req() req:Request, @Body() body: UpdateUserDto) {
    const user_id = req['user'].userId;
   return this.usersService.updateProfile(user_id, body);
  }

}
