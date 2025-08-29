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
exports.UpdateSettingDto = exports.CreateSettingDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CreateSettingDto {
}
exports.CreateSettingDto = CreateSettingDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The title of the setting',
        example: 'AmeenTECH',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The phone number of the setting',
        example: '+221772050626',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The email of the setting',
        example: 'info@ameenaltech.com',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The address of the setting',
        example: 'Dakar, Sénégal',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The meta description of the setting',
        example: 'AmeenTECH is a technology company that provides services to businesses.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "meta_description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The meta keywords of the setting',
        example: 'AmeenTECH, technology, services',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "meta_keywords", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The slogan of the setting',
        example: 'AmeenTECH is a technology company that provides services to businesses.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "slogan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Primary color of the setting',
        example: '#000000',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Secondary color of the setting',
        example: '#000000',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "color_2", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Tertiary color of the setting',
        example: '#000000',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "color_3", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Facebook URL of the setting',
        example: 'https://www.facebook.com/ameentechnology',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "facebook", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Instagram URL of the setting',
        example: 'https://www.instagram.com/ameentechnology',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "instagram", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Twitter URL of the setting',
        example: 'https://www.twitter.com/ameentechnology',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "twitter", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'LinkedIn URL of the setting',
        example: 'https://www.linkedin.com/ameentechnology',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "linkedin", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'WhatsApp URL of the setting',
        example: 'https://www.whatsapp.com/ameentechnology',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "whatsapp", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Telegram URL of the setting',
        example: 'https://www.telegram.org/ameentechnology',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "telegram", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'YouTube URL of the setting',
        example: 'https://www.youtube.com/ameentechnology',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "youtube", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'TikTok URL of the setting',
        example: 'https://www.tiktok.com/ameentechnology',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "tiktok", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Domain URL of the setting',
        example: 'https://www.ameenaltech.com/',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "domain", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Date de création',
        example: '2024-05-01T12:00:00Z',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateSettingDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Date de mise à jour',
        example: '2024-05-02T12:00:00Z',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateSettingDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The timezone of the setting',
        example: 'UTC',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "timezone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Whether the setting is active',
        example: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], CreateSettingDto.prototype, "isActive", void 0);
class UpdateSettingDto extends (0, swagger_1.PartialType)(CreateSettingDto) {
}
exports.UpdateSettingDto = UpdateSettingDto;
//# sourceMappingURL=setting.dto.js.map