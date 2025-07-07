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
exports.UpdateWorkExperienceDto = exports.CreateWorkExperienceDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CreateWorkExperienceDto {
}
exports.CreateWorkExperienceDto = CreateWorkExperienceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The period of work experience', example: '2022-Present' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWorkExperienceDto.prototype, "period", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The company of work experience', example: 'Example Inc.' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWorkExperienceDto.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The role held', example: 'Software Engineer' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWorkExperienceDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Creation date', example: '2024-05-01T12:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateWorkExperienceDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Update date', example: '2024-05-02T12:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateWorkExperienceDto.prototype, "updatedAt", void 0);
class UpdateWorkExperienceDto extends (0, swagger_1.PartialType)(CreateWorkExperienceDto) {
}
exports.UpdateWorkExperienceDto = UpdateWorkExperienceDto;
//# sourceMappingURL=work-experience.dto.js.map