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
exports.SettingsController = void 0;
const common_1 = require("@nestjs/common");
const settings_service_1 = require("./settings.service");
const setting_dto_1 = require("../../libs/dto/setting.dto");
const swagger_1 = require("@nestjs/swagger");
const search_dto_1 = require("../../libs/global/search.dto");
const error_response_1 = require("../../libs/errors/error.response");
const platform_express_1 = require("@nestjs/platform-express");
let SettingsController = class SettingsController {
    constructor(settingsService) {
        this.settingsService = settingsService;
    }
    create(createSettingDto, files) {
        return this.settingsService.create(createSettingDto, files);
    }
    findAll(searchDto) {
        return this.settingsService.findAll(searchDto);
    }
    findOne(id) {
        return this.settingsService.findOne(Number(id));
    }
    update(id, updateSettingDto, files) {
        return this.settingsService.update(Number(id), updateSettingDto, files);
    }
    remove(id) {
        return this.settingsService.remove(Number(id));
    }
};
exports.SettingsController = SettingsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new setting' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Setting created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Data to create settings, including optional images.',
        schema: {
            type: 'object',
            properties: {
                title: { type: 'string', example: 'AmeenTECH' },
                phone: { type: 'string', example: '+221772050626' },
                email: { type: 'string', example: 'info@ameenaltech.com' },
                address: { type: 'string', example: 'Dakar, Sénégal' },
                meta_description: { type: 'string', example: 'AmeenTECH is a technology company that provides services to businesses.' },
                meta_keywords: { type: 'string', example: 'AmeenTECH, technology, services' },
                slogan: { type: 'string', example: 'AmeenTECH is a technology company that provides services to businesses.' },
                isActive: { type: 'boolean', example: true },
                color: { type: 'string', example: '#000000' },
                color_2: { type: 'string', example: '#000000' },
                color_3: { type: 'string', example: '#000000' },
                facebook: { type: 'string', example: 'https://www.facebook.com/ameentechnology' },
                instagram: { type: 'string', example: 'https://www.instagram.com/ameentechnology' },
                twitter: { type: 'string', example: 'https://www.twitter.com/ameentechnology' },
                linkedin: { type: 'string', example: 'https://www.linkedin.com/ameentechnology' },
                whatsapp: { type: 'string', example: 'https://www.whatsapp.com/ameentechnology' },
                telegram: { type: 'string', example: 'https://www.telegram.org/ameentechnology' },
                youtube: { type: 'string', example: 'https://www.youtube.com/ameentechnology' },
                tiktok: { type: 'string', example: 'https://www.tiktok.com/ameentechnology' },
                domain: { type: 'string', example: 'https://www.ameenaltech.com/' },
                timezone: { type: 'string', example: 'UTC' },
                logo: { type: 'string', format: 'binary', description: 'Logo file' },
                logo_2: { type: 'string', format: 'binary', description: 'Secondary logo file' },
                favicon: { type: 'string', format: 'binary', description: 'Favicon file' },
                meta_image: { type: 'string', format: 'binary', description: 'Meta image file' },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'logo', maxCount: 1 },
        { name: 'logo_2', maxCount: 1 },
        { name: 'favicon', maxCount: 1 },
        { name: 'meta_image', maxCount: 1 },
    ])),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [setting_dto_1.CreateSettingDto, Object]),
    __metadata("design:returntype", void 0)
], SettingsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all settings' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Settings retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_dto_1.SearchDto]),
    __metadata("design:returntype", void 0)
], SettingsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a setting by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Setting retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Setting not found', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SettingsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a setting' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Setting updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Setting not found', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Data to update settings. All fields are optional.',
        schema: {
            type: 'object',
            properties: {
                title: { type: 'string' },
                phone: { type: 'string' },
                email: { type: 'string' },
                address: { type: 'string' },
                meta_description: { type: 'string' },
                meta_keywords: { type: 'string' },
                slogan: { type: 'string' },
                isActive: { type: 'boolean' },
                color: { type: 'string' },
                color_2: { type: 'string' },
                color_3: { type: 'string' },
                facebook: { type: 'string' },
                instagram: { type: 'string' },
                twitter: { type: 'string' },
                linkedin: { type: 'string' },
                whatsapp: { type: 'string' },
                telegram: { type: 'string' },
                youtube: { type: 'string' },
                tiktok: { type: 'string' },
                domain: { type: 'string' },
                timezone: { type: 'string' },
                logo: { type: 'string', format: 'binary' },
                logo_2: { type: 'string', format: 'binary' },
                favicon: { type: 'string', format: 'binary' },
                meta_image: { type: 'string', format: 'binary' },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'logo', maxCount: 1 },
        { name: 'logo_2', maxCount: 1 },
        { name: 'favicon', maxCount: 1 },
        { name: 'meta_image', maxCount: 1 },
    ])),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, setting_dto_1.UpdateSettingDto, Object]),
    __metadata("design:returntype", void 0)
], SettingsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a setting' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Setting deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Setting not found', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SettingsController.prototype, "remove", null);
exports.SettingsController = SettingsController = __decorate([
    (0, swagger_1.ApiTags)('settings'),
    (0, common_1.Controller)('settings'),
    __metadata("design:paramtypes", [settings_service_1.SettingsService])
], SettingsController);
//# sourceMappingURL=settings.controller.js.map