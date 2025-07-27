import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schema/user.schema';
import { ResetToken, ResetTokenSchema } from 'src/auth/schema/resert-token.schema';
import { SendMailService } from 'src/services/send-mail.services';

@Module({
  controllers: [UsersController],
  imports: [
    MongooseModule.forFeature([
    { name: User.name, schema: UserSchema, collection: 'users' },
     {name: ResetToken.name, schema: ResetTokenSchema, collection: 'reset_tokens'}
    ]),
  ],
  providers: [UsersService, SendMailService],
})
export class UsersModule {}
