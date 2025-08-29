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
exports.UpdateBlogDto = exports.CreateBlogDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CreateBlogDto {
}
exports.CreateBlogDto = CreateBlogDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category of the blog post',
        example: 'Technology',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date of the blog post', example: '2024-07-26' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Title of the blog post',
        example: 'The Future of AI',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Excerpt of the blog post',
        example: 'A brief overview of the future of artificial intelligence.',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogDto.prototype, "excerpt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Link to the full blog post',
        example: 'https://example.com/blog/the-future-of-ai',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogDto.prototype, "link", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Creation date',
        example: '2024-05-01T12:00:00Z',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateBlogDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Update date',
        example: '2024-05-02T12:00:00Z',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateBlogDto.prototype, "updatedAt", void 0);
class UpdateBlogDto extends (0, swagger_1.PartialType)(CreateBlogDto) {
}
exports.UpdateBlogDto = UpdateBlogDto;
//# sourceMappingURL=blog.dto.js.map