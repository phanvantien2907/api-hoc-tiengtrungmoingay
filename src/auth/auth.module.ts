import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ResetToken, ResetTokenSchema } from 'src/auth/schema/resert-token.schema';
import { RefreshToken, RefreshTokenSchema } from 'src/auth/schema/refresh-token.schema';
import { SendMailService } from 'src/services/send-mail.services';
import { User, UserSchema } from 'src/users/schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
    {name:User.name, schema:UserSchema, collection: 'users'},
    {name: RefreshToken.name, schema: RefreshTokenSchema, collection: 'refresh_tokens'},
   {name: ResetToken.name, schema: ResetTokenSchema, collection: 'reset_tokens'}
     ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, SendMailService],
})
export class AuthModule {}
