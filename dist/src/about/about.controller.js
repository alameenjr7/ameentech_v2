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
let AboutController = class AboutController {
    constructor(aboutService) {
        this.aboutService = aboutService;
    }
    create(createAboutDto) {
        return this.aboutService.create(createAboutDto);
    }
    findAll(searchDto) {
        return this.aboutService.findAll(searchDto);
    }
    findOne(id) {
        return this.aboutService.findOne(Number(id));
    }
    update(id, updateAboutDto) {
        return this.aboutService.update(Number(id), updateAboutDto);
    }
    remove(id) {
        return this.aboutService.remove(Number(id));
    }
};
exports.AboutController = AboutController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer une nouvelle section About' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Section About créée avec succès', type: about_dto_1.AboutDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Requête invalide', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [about_dto_1.AboutDto]),
    __metadata("design:returntype", void 0)
], AboutController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer toutes les sections About' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des sections About', type: [about_dto_1.AboutDto] }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Paramètres de recherche invalides', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_dto_1.SearchDto]),
    __metadata("design:returntype", void 0)
], AboutController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer une section About par ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Section About trouvée', type: about_dto_1.AboutDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Section About non trouvée', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'ID invalide', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AboutController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour une section About' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Section About mise à jour', type: about_dto_1.AboutDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Section About non trouvée', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Données de mise à jour invalides', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, about_dto_1.UpdateAboutDto]),
    __metadata("design:returntype", void 0)
], AboutController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer une section About' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Section About supprimée' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Section About non trouvée', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'ID invalide', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AboutController.prototype, "remove", null);
exports.AboutController = AboutController = __decorate([
    (0, swagger_1.ApiTags)('about'),
    (0, common_1.Controller)('about'),
    __metadata("design:paramtypes", [about_service_1.AboutService])
], AboutController);
//# sourceMappingURL=about.controller.js.map