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
exports.UpdateEducationDto = exports.CreateEducationDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CreateEducationDto {
}
exports.CreateEducationDto = CreateEducationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The period of education', example: '2018-2022' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEducationDto.prototype, "period", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The institution of education', example: 'University of Example' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEducationDto.prototype, "institution", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The degree obtained', example: 'Bachelor of Science in Computer Science' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEducationDto.prototype, "degree", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Creation date', example: '2024-05-01T12:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateEducationDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Update date', example: '2024-05-02T12:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateEducationDto.prototype, "updatedAt", void 0);
class UpdateEducationDto extends (0, swagger_1.PartialType)(CreateEducationDto) {
}
exports.UpdateEducationDto = UpdateEducationDto;
//# sourceMappingURL=education.dto.js.map