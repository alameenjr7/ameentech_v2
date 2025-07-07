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
exports.UpdateProjectDto = exports.CreateProjectDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CreateProjectDto {
}
exports.CreateProjectDto = CreateProjectDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Titre du projet', example: 'Site vitrine' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description du projet', example: 'Développement d\'un site vitrine pour un client.' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Image du projet', example: 'project-image.png' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Technologies utilisées (chaîne JSON)', example: '["NestJS", "React", "MySQL"]' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "technologies", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Technologies utilisées (chaîne JSON)', example: '["NestJS", "React", "MySQL"]' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Projet actif ?', example: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProjectDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Ordre d\'affichage', example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProjectDto.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nom du client', example: 'Entreprise X' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "clientName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'URL du projet', example: 'https://exemple.com' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "projectUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID du service associé', example: 2 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProjectDto.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nouveau projet ?', example: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProjectDto.prototype, "isNew", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Projet en vedette ?', example: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProjectDto.prototype, "isFeatured", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Slug SEO-friendly', example: 'site-vitrine' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Catégorie du projet', example: 'Web' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Date de création', example: '2024-05-01T12:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateProjectDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Date de mise à jour', example: '2024-05-02T12:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateProjectDto.prototype, "updatedAt", void 0);
class UpdateProjectDto extends (0, swagger_1.PartialType)(CreateProjectDto) {
}
exports.UpdateProjectDto = UpdateProjectDto;
//# sourceMappingURL=project.dto.js.map