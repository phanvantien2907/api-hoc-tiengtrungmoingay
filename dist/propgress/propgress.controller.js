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
exports.PropgressController = void 0;
const common_1 = require("@nestjs/common");
const propgress_service_1 = require("./propgress.service");
const create_propgress_dto_1 = require("./dto/create-propgress.dto");
const update_propgress_dto_1 = require("./dto/update-propgress.dto");
let PropgressController = class PropgressController {
    propgressService;
    constructor(propgressService) {
        this.propgressService = propgressService;
    }
    create(createPropgressDto) {
        return this.propgressService.create(createPropgressDto);
    }
    findAll() {
        return this.propgressService.findAll();
    }
    findOne(id) {
        return this.propgressService.findOne(+id);
    }
    update(id, updatePropgressDto) {
        return this.propgressService.update(+id, updatePropgressDto);
    }
    remove(id) {
        return this.propgressService.remove(+id);
    }
};
exports.PropgressController = PropgressController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_propgress_dto_1.CreatePropgressDto]),
    __metadata("design:returntype", void 0)
], PropgressController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PropgressController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PropgressController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_propgress_dto_1.UpdatePropgressDto]),
    __metadata("design:returntype", void 0)
], PropgressController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PropgressController.prototype, "remove", null);
exports.PropgressController = PropgressController = __decorate([
    (0, common_1.Controller)('propgress'),
    __metadata("design:paramtypes", [propgress_service_1.PropgressService])
], PropgressController);
//# sourceMappingURL=propgress.controller.js.map