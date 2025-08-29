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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const auth_dto_1 = require("../../libs/dto/auth.dto");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const public_decorator_1 = require("./decorators/public.decorator");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(loginDto) {
        return this.authService.login(loginDto);
    }
    getProfile(req) {
        return req.user;
    }
    async changePassword(req, changePasswordDto) {
        return this.authService.changePassword(req.user.id, changePasswordDto.currentPassword, changePasswordDto.newPassword);
    }
    async updateProfile(req, updateProfileDto) {
        return this.authService.updateProfile(req.user.id, updateProfileDto);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Connexion utilisateur' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Connexion réussie',
        schema: {
            type: 'object',
            properties: {
                user: {
                    type: 'object',
                    properties: {
                        id: { type: 'number' },
                        email: { type: 'string' },
                        firstName: { type: 'string' },
                        lastName: { type: 'string' },
                        role: { type: 'string' },
                        isActive: { type: 'boolean' },
                        createdAt: { type: 'string' },
                    },
                },
                token: { type: 'string' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Email ou mot de passe incorrect' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: "Obtenir le profil de l'utilisateur connecté" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Profil utilisateur',
        schema: {
            type: 'object',
            properties: {
                id: { type: 'number' },
                email: { type: 'string' },
                firstName: { type: 'string' },
                lastName: { type: 'string' },
                role: { type: 'string' },
                isActive: { type: 'boolean' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Post)('change-password'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Changer le mot de passe' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Mot de passe modifié avec succès',
        schema: {
            type: 'object',
            properties: {
                message: { type: 'string' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Non autorisé ou mot de passe incorrect',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, auth_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour le profil utilisateur' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Profil mis à jour avec succès',
        schema: {
            type: 'object',
            properties: {
                id: { type: 'number' },
                email: { type: 'string' },
                firstName: { type: 'string' },
                lastName: { type: 'string' },
                role: { type: 'string' },
                isActive: { type: 'boolean' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Email déjà utilisé par un autre utilisateur',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, auth_dto_1.UpdateProfileDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateProfile", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Authentification'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map