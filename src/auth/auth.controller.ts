import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegisterDTO } from 'src/auth/dto/register.dto';
import { LoginDTO } from 'src/auth/dto/login.dto';
import { RefreshTokenDTO } from 'src/auth/dto/refresh-token.dto';
import { GuardsGuard } from 'src/guards/guards.guard';
import { ResetPasswordDTO } from 'src/auth/dto/resert-password.dto';
import { ForgetPasswordDTO } from 'src/auth/dto/forget-password.dto';
import { ChangePasswordDTO } from 'src/auth/dto/chage-password.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Tạo tài khoản mới' })
  register(@Body() registerData: RegisterDTO) {
    return this.authService.register(registerData);
  }

  @Post('login')
  @ApiOperation({ summary: 'Đăng nhập vào hệ thống' })
  login(@Body() loginData: LoginDTO) {
    return this.authService.login(loginData);
  }

   @Post('refresh-token')
  @UseGuards(GuardsGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Làm mới token' })
  refreshtoken(@Body() rftokenDTO: RefreshTokenDTO) {
    return this.authService.refreshtoken(rftokenDTO.token);
  }

  @Post('logout')
  @UseGuards(GuardsGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Đăng xuất khỏi hệ thống' })
  logout(@Req() req: Request) {
  const user = req['user'];
  return this.authService.logout(user.userId);
  }

  @Post('change-password')
   @UseGuards(GuardsGuard)
   @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Thay đổi mật khẩu' })
  changePassword( @Body() changeData: ChangePasswordDTO, @Req() req: Request) {
    const user = req['user'];
    return this.authService.changePassword(user.userId, changeData.oldPassword, changeData.newPassword);
  }

  @Post('forget-password')
  @ApiOperation({ summary: 'Quên mật khẩu' })
  forgetPassword(@Body() body: ForgetPasswordDTO) {
    return this.authService.forgetPassword(body.email);
  }

   @Post('reset-password/:token')
   @ApiOperation({ summary: 'Đặt lại mật khẩu' })
    resetPassword(@Param('token') token: string, @Body() resetPasswordDTO: ResetPasswordDTO) {
    return this.authService.resetPassword(resetPasswordDTO.newPassword, token);
    }
}
