"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const mailer_1 = require("@nestjs-modules/mailer");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const pug_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/pug.adapter");
const courses_module_1 = require("./courses/courses.module");
const lessons_module_1 = require("./lessons/lessons.module");
const blog_module_1 = require("./blog/blog.module");
const categories_module_1 = require("./categories/categories.module");
const contacts_module_1 = require("./contacts/contacts.module");
const media_module_1 = require("./media/media.module");
const propgress_module_1 = require("./propgress/propgress.module");
const quiz_module_1 = require("./quiz/quiz.module");
const vocabularies_module_1 = require("./vocabularies/vocabularies.module");
const users_module_1 = require("./users/users.module");
const exception_module_1 = require("./exception/exception.module");
const dontenv = require("dotenv");
const core_1 = require("@nestjs/core");
const http_exception_filter_1 = require("./exception/http-exception.filter");
dontenv.config();
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, mongoose_1.MongooseModule.forRoot(process.env.DATABASE_URL), auth_module_1.AuthModule, jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '1h' },
                global: true,
            }), mailer_1.MailerModule.forRoot({
                transport: {
                    host: process.env.HOST_EMAIL,
                    port: parseInt(process.env.PORT_EMAIL, 10),
                    auth: {
                        user: process.env.USER_EMAIL,
                        pass: process.env.PASSWORD_APP_EMAIL,
                    }
                },
                defaults: {
                    from: '"nest-modules" <modules@nestjs.com>',
                },
                template: {
                    dir: __dirname + '/templates',
                    adapter: new pug_adapter_1.PugAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }), courses_module_1.CoursesModule, lessons_module_1.LessonsModule, blog_module_1.BlogModule, categories_module_1.CategoriesModule, contacts_module_1.ContactsModule, media_module_1.MediaModule, propgress_module_1.PropgressModule, quiz_module_1.QuizModule, vocabularies_module_1.VocabulariesModule, users_module_1.UsersModule, exception_module_1.ExceptionModule,],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, {
                provide: core_1.APP_FILTER,
                useClass: http_exception_filter_1.HttpExceptionFilter,
            }],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map