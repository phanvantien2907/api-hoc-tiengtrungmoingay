"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
let SendMailService = class SendMailService {
    mailerService;
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendResetPasswordEmail(email, token) {
        const url = `${process.env.LOCAL_URL}/${process.env.LOCAL_RESET_PASSWORD_PATH}/${token}`;
        await this.mailerService.sendMail({
            to: email,
            from: 'Authentication Service Backend',
            subject: 'Reset Password',
            template: 'reset-password',
            html: `<p>Xin chào <b>${email}</b> gần đây chúng tôi nhận được yêu cầu đặt lại mật khẩu, Click <a href="${url}">here</a> để đặt lại mật khẩu</p>`,
        });
    }
};
exports.SendMailService = SendMailService;
exports.SendMailService = SendMailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], SendMailService);
//# sourceMappingURL=send-mail.services.js.map