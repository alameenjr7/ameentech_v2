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
exports.AboutController = void 0;
const common_1 = require("@nestjs/common");
const about_service_1 = require("./about.service");
const about_dto_1 = require("../../libs/dto/about.dto");
const swagger_1 = require("@nestjs/swagger");
const search_dto_1 = require("../../libs/global/search.dto");
const error_response_1 = require("../../libs/errors/error.response");
const platform_express_1 = require("@nestjs/platform-express");
let AboutController = class AboutController {
    constructor(aboutService) {
        this.aboutService = aboutService;
    }
    create(createAboutDto, file) {
        return this.aboutService.create(createAboutDto, file);
    }
    findAll(searchDto) {
        return this.aboutService.findAll(searchDto);
    }
    findOne(id) {
        return this.aboutService.findOne(Number(id));
    }
    update(id, updateAboutDto, file) {
        return this.aboutService.update(Number(id), updateAboutDto, file);
    }
    remove(id) {
        return this.aboutService.remove(Number(id));
    }
};
exports.AboutController = AboutController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer une nouvelle section About' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Section About créée avec succès' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Requête invalide' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Données pour créer la section "À propos".',
        schema: {
            type: 'object',
            required: ['title', 'description', 'paragraphs', 'stats'],
            properties: {
                title: { type: 'string', example: 'À propos de nous' },
                description: { type: 'string', example: 'Nous sommes une équipe...' },
                paragraphs: {
                    type: 'string',
                    example: '["Paragraphe 1", "Paragraphe 2"]',
                },
                stats: {
                    type: 'string',
                    example: '[{"number":"10+","label":"Projets"}]',
                },
                yearExperience: {
                    type: 'string',
                    example: '[{"number":"10+","label":"Années d\'expérience"}]',
                },
                clients: {
                    type: 'string',
                    example: '[{"number":"100+","label":"Clients"}]',
                },
                signature: { type: 'string', example: 'Baaba NGOM' },
                imageUrl: {
                    type: 'string',
                    format: 'binary',
                    description: 'Fichier image pour la section (optionnel).',
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('imageUrl')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [about_dto_1.AboutDto, Object]),
    __metadata("design:returntype", void 0)
], AboutController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer toutes les sections About' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Liste des sections About',
        type: [about_dto_1.AboutDto],
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Paramètres de recherche invalides',
        type: error_response_1.ErrorResponse,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_dto_1.SearchDto]),
    __metadata("design:returntype", void 0)
], AboutController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer une section About par ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Section About trouvée',
        type: about_dto_1.AboutDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Section About non trouvée',
        type: error_response_1.ErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'ID invalide', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AboutController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour une section About' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Section About mise à jour' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Section About non trouvée' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Données invalides' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Données pour mettre à jour la section "À propos". Tous les champs sont optionnels.',
        schema: {
            type: 'object',
            properties: {
                title: { type: 'string' },
                description: { type: 'string' },
                paragraphs: { type: 'string' },
                stats: { type: 'string' },
                yearExperience: { type: 'string' },
                clients: { type: 'string' },
                signature: { type: 'string' },
                imageUrl: {
                    type: 'string',
                    format: 'binary',
                    description: "Nouveau fichier image pour remplacer l'ancien.",
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('imageUrl')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, about_dto_1.UpdateAboutDto, Object]),
    __metadata("design:returntype", void 0)
], AboutController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer une section About' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Section About supprimée' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Section About non trouvée',
        type: error_response_1.ErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'ID invalide', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AboutController.prototype, "remove", null);
exports.AboutController = AboutController = __decorate([
    (0, swagger_1.ApiTags)('abouts'),
    (0, common_1.Controller)('abouts'),
    __metadata("design:paramtypes", [about_service_1.AboutService])
], AboutController);
//# sourceMappingURL=about.controller.js.map