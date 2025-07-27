import { HttpStatus } from "@nestjs/common";
export declare function changePassword(userId: any, oldPassword: string, newPassword: string, userModel: any): Promise<{
    msg: string;
    status: HttpStatus;
}>;
