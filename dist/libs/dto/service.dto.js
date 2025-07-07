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
exports.UpdateServiceDto = exports.CreateServiceDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CreateServiceDto {
}
exports.CreateServiceDto = CreateServiceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Titre du service', example: 'Développement Web' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description du service', example: 'Création de sites web modernes.' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Icône du service', example: 'web-icon.png' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceDto.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service actif ?', example: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateServiceDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Ordre d\'affichage', example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateServiceDto.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nouveau service ?', example: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateServiceDto.prototype, "isNew", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service en vedette ?', example: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateServiceDto.prototype, "isFeatured", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Slug SEO-friendly', example: 'developpement-web' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Date de création', example: '2024-05-01T12:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateServiceDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Date de mise à jour', example: '2024-05-02T12:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateServiceDto.prototype, "updatedAt", void 0);
class UpdateServiceDto extends (0, swagger_1.PartialType)(CreateServiceDto) {
}
exports.UpdateServiceDto = UpdateServiceDto;
//# sourceMappingURL=service.dto.js.map