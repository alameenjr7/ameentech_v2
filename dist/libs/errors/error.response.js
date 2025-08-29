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
exports.ErrorResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class ErrorResponse {
}
exports.ErrorResponse = ErrorResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 400, description: 'HTTP status code' }),
    __metadata("design:type", Number)
], ErrorResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bad Request', description: 'Error message' }),
    __metadata("design:type", String)
], ErrorResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bad Request', description: 'Error type' }),
    __metadata("design:type", String)
], ErrorResponse.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: new Date().toISOString(),
        description: 'Timestamp of the error',
    }),
    __metadata("design:type", String)
], ErrorResponse.prototype, "timestamp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '/api/resource', description: 'Request path' }),
    __metadata("design:type", String)
], ErrorResponse.prototype, "path", void 0);
//# sourceMappingURL=error.response.js.map