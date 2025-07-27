"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropgressModule = void 0;
const common_1 = require("@nestjs/common");
const propgress_service_1 = require("./propgress.service");
const propgress_controller_1 = require("./propgress.controller");
let PropgressModule = class PropgressModule {
};
exports.PropgressModule = PropgressModule;
exports.PropgressModule = PropgressModule = __decorate([
    (0, common_1.Module)({
        controllers: [propgress_controller_1.PropgressController],
        providers: [propgress_service_1.PropgressService],
    })
], PropgressModule);
//# sourceMappingURL=propgress.module.js.map