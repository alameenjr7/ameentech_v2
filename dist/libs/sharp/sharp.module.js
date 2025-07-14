"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharpModule = void 0;
const common_1 = require("@nestjs/common");
const sharp_service_1 = require("./sharp.service");
let SharpModule = class SharpModule {
};
exports.SharpModule = SharpModule;
exports.SharpModule = SharpModule = __decorate([
    (0, common_1.Module)({
        providers: [sharp_service_1.SharpService],
        exports: [sharp_service_1.SharpService],
    })
], SharpModule);
//# sourceMappingURL=sharp.module.js.map