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
exports.BlogsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const blogs_service_1 = require("./blogs.service");
const blog_dto_1 = require("../../libs/dto/blog.dto");
const error_response_1 = require("../../libs/errors/error.response");
const search_dto_1 = require("../../libs/global/search.dto");
const platform_express_1 = require("@nestjs/platform-express");
let BlogsController = class BlogsController {
    constructor(blogsService) {
        this.blogsService = blogsService;
    }
    async create(createBlogDto, file) {
        return this.blogsService.create(createBlogDto, file);
    }
    findAll(searchDto) {
        return this.blogsService.findAll(searchDto);
    }
    findOne(id) {
        return this.blogsService.findOne(+id);
    }
    update(id, updateBlogDto, file) {
        return this.blogsService.update(+id, updateBlogDto, file);
    }
    remove(id) {
        return this.blogsService.remove(+id);
    }
};
exports.BlogsController = BlogsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new blog post' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Blog post created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Données pour créer un article de blog, y compris une image.',
        schema: {
            type: 'object',
            properties: {
                category: { type: 'string', example: 'Technology' },
                date: { type: 'string', example: '2024-07-26' },
                title: { type: 'string', example: 'The Future of AI' },
                excerpt: { type: 'string', example: 'A brief overview...' },
                link: { type: 'string', example: 'https://example.com/blog/...' },
                image: {
                    type: 'string',
                    format: 'binary',
                    description: "Le fichier image pour l'article de blog.",
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blog_dto_1.CreateBlogDto, Object]),
    __metadata("design:returntype", Promise)
], BlogsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all blog posts' }),
    (0, swagger_1.ApiQuery)({ name: 'q', required: false, description: 'Search query string' }),
    (0, swagger_1.ApiQuery)({
        name: 'order_by',
        required: false,
        enum: ['title', 'createdAt'],
        description: 'Sort by title or creation date',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'order_dir',
        required: false,
        enum: ['asc', 'desc'],
        description: 'Sort direction',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        required: false,
        description: 'Limit number of results',
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'offset',
        required: false,
        description: 'Offset for pagination',
        type: Number,
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of blog posts' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_dto_1.SearchDto]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a blog post by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Blog post ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Blog post found' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Blog post not found',
        type: error_response_1.ErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a blog post' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Blog post ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Blog post updated successfully' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Blog post not found',
        type: error_response_1.ErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Données pour mettre à jour un article. Tous les champs sont optionnels.',
        schema: {
            type: 'object',
            properties: {
                category: { type: 'string' },
                date: { type: 'string' },
                title: { type: 'string' },
                excerpt: { type: 'string' },
                link: { type: 'string' },
                image: {
                    type: 'string',
                    format: 'binary',
                    description: "Un nouveau fichier image pour remplacer l'ancien (optionnel).",
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, blog_dto_1.UpdateBlogDto, Object]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a blog post' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Blog post ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Blog post deleted successfully' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Blog post not found',
        type: error_response_1.ErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "remove", null);
exports.BlogsController = BlogsController = __decorate([
    (0, swagger_1.ApiTags)('blogs'),
    (0, common_1.Controller)('blogs'),
    __metadata("design:paramtypes", [blogs_service_1.BlogsService])
], BlogsController);
//# sourceMappingURL=blogs.controller.js.map