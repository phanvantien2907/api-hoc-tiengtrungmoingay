import { HttpException, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { CoursesModule } from './courses/courses.module';
import { LessonsModule } from './lessons/lessons.module';
import { BlogModule } from './blog/blog.module';
import { CategoriesModule } from './categories/categories.module';
import { ContactsModule } from './contacts/contacts.module';
import { MediaModule } from './media/media.module';
import { PropgressModule } from './propgress/propgress.module';
import { QuizModule } from './quiz/quiz.module';
import { VocabulariesModule } from './vocabularies/vocabularies.module';
import { UsersModule } from './users/users.module';
import { ExceptionModule } from './exception/exception.module';
import * as dontenv from 'dotenv';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/exception/http-exception.filter';
dontenv.config();

@Module({
  imports: [AuthModule, MongooseModule.forRoot(process.env.DATABASE_URL!), AuthModule, JwtModule.register({
    secret: process.env.JWT_SECRET!,
    signOptions: { expiresIn: '1h' },
    global: true,
  }), MailerModule.forRoot({
      transport: {
        host: process.env.HOST_EMAIL!,
        port: parseInt(process.env.PORT_EMAIL!, 10),
        auth: {
          user: process.env.USER_EMAIL!,
          pass: process.env.PASSWORD_APP_EMAIL!,
        }
      },
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }), CoursesModule, LessonsModule, BlogModule, CategoriesModule, ContactsModule, MediaModule, PropgressModule, QuizModule, VocabulariesModule, UsersModule, ExceptionModule,],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  }],
})
export class AppModule {}
