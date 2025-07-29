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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VocabulariesController = void 0;
const common_1 = require("@nestjs/common");
const vocabularies_service_1 = require("./vocabularies.service");
const create_vocabulary_dto_1 = require("./dto/create-vocabulary.dto");
const update_vocabulary_dto_1 = require("./dto/update-vocabulary.dto");
const swagger_1 = require("@nestjs/swagger");
const guards_guard_1 = require("../guards/guards.guard");
let VocabulariesController = class VocabulariesController {
    vocabulariesService;
    constructor(vocabulariesService) {
        this.vocabulariesService = vocabulariesService;
    }
    create(createVocabularyDto) {
        return this.vocabulariesService.create(createVocabularyDto);
    }
    findAll(page = 1, limit = 10) {
        return this.vocabulariesService.findAll(+page, +limit);
    }
    findOne(id) {
        return this.vocabulariesService.findOne(id);
    }
    update(id, updateVocabularyDto) {
        return this.vocabulariesService.update(id, updateVocabularyDto);
    }
    remove(id) {
        return this.vocabulariesService.remove(id);
    }
};
exports.VocabulariesController = VocabulariesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(guards_guard_1.GuardsGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vocabulary_dto_1.CreateVocabularyDto]),
    __metadata("design:returntype", void 0)
], VocabulariesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(guards_guard_1.GuardsGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Lấy danh sách từ vựng' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], VocabulariesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(guards_guard_1.GuardsGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VocabulariesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(guards_guard_1.GuardsGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vocabulary_dto_1.UpdateVocabularyDto]),
    __metadata("design:returntype", void 0)
], VocabulariesController.prototype, "update", null);
__decorate([
    (0, common_1.Put)('delete/:id'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(guards_guard_1.GuardsGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VocabulariesController.prototype, "remove", null);
exports.VocabulariesController = VocabulariesController = __decorate([
    (0, common_1.Controller)('vocabularies'),
    __metadata("design:paramtypes", [vocabularies_service_1.VocabulariesService])
], VocabulariesController);
//# sourceMappingURL=vocabularies.controller.js.map