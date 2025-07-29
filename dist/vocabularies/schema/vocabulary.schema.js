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
exports.VocabulariesSchema = exports.Vocabularies = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const mongoose_2 = require("mongoose");
const mongoose_3 = require("mongoose");
const create_form_dto_1 = require("../dto/create-form.dto");
let Vocabularies = class Vocabularies extends mongoose_2.Document {
    simplified;
    radical;
    frequency;
    pos;
    forms;
    categories;
    is_deleted;
    is_active;
};
exports.Vocabularies = Vocabularies;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, index: true }),
    __metadata("design:type", String)
], Vocabularies.prototype, "simplified", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Vocabularies.prototype, "radical", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, index: true }),
    __metadata("design:type", Number)
], Vocabularies.prototype, "frequency", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String] }),
    __metadata("design:type", Array)
], Vocabularies.prototype, "pos", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [create_form_dto_1.CreateFormDto] }),
    __metadata("design:type", Array)
], Vocabularies.prototype, "forms", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Categories' }),
    __metadata("design:type", mongoose_3.Types.ObjectId)
], Vocabularies.prototype, "categories", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false, type: Boolean }),
    __metadata("design:type", Boolean)
], Vocabularies.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true, type: Boolean }),
    __metadata("design:type", Boolean)
], Vocabularies.prototype, "is_active", void 0);
exports.Vocabularies = Vocabularies = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Vocabularies);
exports.VocabulariesSchema = mongoose_1.SchemaFactory.createForClass(Vocabularies);
//# sourceMappingURL=vocabulary.schema.js.map