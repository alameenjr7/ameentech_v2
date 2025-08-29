"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharpService = void 0;
const common_1 = require("@nestjs/common");
const sharp_1 = __importDefault(require("sharp"));
const sharp_config_1 = require("./sharp.config");
const path_1 = require("path");
let SharpService = class SharpService {
    async resizeImage(buffer, originalName) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const extension = (0, path_1.extname)(originalName) || '.jpg';
        const newFilename = `img-${uniqueSuffix}${extension}`;
        const outputPath = sharp_config_1.sharpConfig.getOutputPath(newFilename);
        await (0, sharp_1.default)(buffer)
            .resize(sharp_config_1.sharpConfig.resize.width, sharp_config_1.sharpConfig.resize.height)
            .toFormat(sharp_config_1.sharpConfig.resize.format, {
            quality: sharp_config_1.sharpConfig.resize.quality,
        })
            .toFile(outputPath);
        return newFilename;
    }
};
exports.SharpService = SharpService;
exports.SharpService = SharpService = __decorate([
    (0, common_1.Injectable)()
], SharpService);
//# sourceMappingURL=sharp.service.js.map