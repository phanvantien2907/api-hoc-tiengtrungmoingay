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
exports.RefreshTokenSchema = exports.RefreshToken = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let RefreshToken = class RefreshToken extends mongoose_2.Document {
    token;
    userId;
    exp_date;
};
exports.RefreshToken = RefreshToken;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], RefreshToken.prototype, "token", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Types.ObjectId }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], RefreshToken.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], RefreshToken.prototype, "exp_date", void 0);
exports.RefreshToken = RefreshToken = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], RefreshToken);
exports.RefreshTokenSchema = mongoose_1.SchemaFactory.createForClass(RefreshToken);
//# sourceMappingURL=refresh-token.schema.js.map