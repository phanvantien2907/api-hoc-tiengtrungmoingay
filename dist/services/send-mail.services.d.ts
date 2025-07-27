import { MailerService } from "@nestjs-modules/mailer";
export declare class SendMailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendResetPasswordEmail(email: string, token: string): Promise<void>;
}
