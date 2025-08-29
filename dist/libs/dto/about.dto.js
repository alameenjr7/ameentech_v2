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
exports.UpdateAboutDto = exports.AboutDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class AboutDto {
}
exports.AboutDto = AboutDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Titre de la section à propos',
        example: 'À propos de nous',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AboutDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description principale',
        example: 'Nous sommes une équipe passionnée...',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AboutDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "URL de l'image", example: 'about.jpg' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AboutDto.prototype, "imageUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Paragraphes (chaîne JSON)',
        example: '["Paragraphe 1", "Paragraphe 2"]',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AboutDto.prototype, "paragraphs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Statistiques (chaîne JSON)',
        example: '[{"number":"60+","label":"Projets réalisés"}]',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AboutDto.prototype, "stats", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Années d'expérience",
        example: '[{"number":"10+","label":"Années d\'expérience"}]',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AboutDto.prototype, "yearExperience", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Clients (chaîne JSON)',
        example: '[{"number":"100+","label":"Clients"}]',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AboutDto.prototype, "clients", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Signature', example: 'Baaba NGOM' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AboutDto.prototype, "signature", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Section active ?', example: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AboutDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Version du contenu', example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AboutDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Date de création',
        example: '2024-05-01T12:00:00Z',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], AboutDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Date de mise à jour',
        example: '2024-05-02T12:00:00Z',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], AboutDto.prototype, "updatedAt", void 0);
class UpdateAboutDto extends (0, swagger_1.PartialType)(AboutDto) {
}
exports.UpdateAboutDto = UpdateAboutDto;
//# sourceMappingURL=about.dto.js.map