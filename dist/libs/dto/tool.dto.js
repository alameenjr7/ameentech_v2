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
exports.UpdateToolDto = exports.CreateToolDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CreateToolDto {
}
exports.CreateToolDto = CreateToolDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the tool', example: 'NestJS' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateToolDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Percentage of proficiency', example: 90 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateToolDto.prototype, "percent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Icon for the tool', example: 'nestjs.png' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateToolDto.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Creation date', example: '2024-05-01T12:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateToolDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Update date', example: '2024-05-02T12:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateToolDto.prototype, "updatedAt", void 0);
class UpdateToolDto extends (0, swagger_1.PartialType)(CreateToolDto) {
}
exports.UpdateToolDto = UpdateToolDto;
//# sourceMappingURL=tool.dto.js.map