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
exports.ContactsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ContactsService = class ContactsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createContactDto) {
        try {
            return await this.prisma.contact.create({
                data: {
                    ...createContactDto,
                    status: createContactDto.status || 'new',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la création du contact');
        }
    }
    async findAll(searchDto) {
        const { q, order_by = 'createdAt', order_dir = 'desc', limit, offset, } = searchDto || {};
        const where = {};
        if (q) {
            where.OR = [
                { name: { contains: q } },
                { email: { contains: q } },
                { message: { contains: q } },
                { interest: { contains: q } },
            ];
        }
        const orderBy = {};
        if (order_by === 'name') {
            orderBy.name = order_dir;
        }
        else {
            orderBy.createdAt = order_dir;
        }
        try {
            return await this.prisma.contact.findMany({
                where,
                orderBy,
                take: limit,
                skip: offset,
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la récupération des contacts');
        }
    }
    async findOne(id) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('ID invalide');
        }
        try {
            const contact = await this.prisma.contact.findUnique({
                where: { id },
            });
            if (!contact) {
                throw new common_1.NotFoundException(`Contact avec l'ID ${id} non trouvé`);
            }
            return contact;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException ||
                error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.BadRequestException('Erreur lors de la récupération du contact');
        }
    }
    async update(id, updateContactDto) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('ID invalide');
        }
        await this.findOne(id);
        try {
            return await this.prisma.contact.update({
                where: { id },
                data: {
                    ...updateContactDto,
                    updatedAt: new Date(),
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la mise à jour du contact');
        }
    }
    async remove(id) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('ID invalide');
        }
        await this.findOne(id);
        try {
            return await this.prisma.contact.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la suppression du contact');
        }
    }
    async findByEmail(email) {
        if (!email || typeof email !== 'string') {
            throw new common_1.BadRequestException('Email invalide');
        }
        try {
            return await this.prisma.contact.findMany({
                where: {
                    email: {
                        contains: email,
                    },
                },
                orderBy: {
                    createdAt: 'desc',
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la recherche par email');
        }
    }
    async findByInterest(interest) {
        if (!interest || typeof interest !== 'string') {
            throw new common_1.BadRequestException('Interest invalide');
        }
        try {
            return await this.prisma.contact.findMany({
                where: {
                    interest: {
                        contains: interest,
                    },
                },
                orderBy: {
                    createdAt: 'desc',
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la recherche par interest');
        }
    }
    async findByStatus(status) {
        if (!status || typeof status !== 'string') {
            throw new common_1.BadRequestException('Statut invalide');
        }
        try {
            return await this.prisma.contact.findMany({
                where: { status: status },
                orderBy: {
                    createdAt: 'desc',
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la recherche par statut');
        }
    }
    async getContactStats() {
        try {
            const [total, newContacts, processedContacts] = await Promise.all([
                this.prisma.contact.count(),
                this.prisma.contact.count({ where: { status: 'new' } }),
                this.prisma.contact.count({ where: { status: 'processed' } }),
            ]);
            return {
                total,
                new: newContacts,
                processed: processedContacts,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la récupération des statistiques');
        }
    }
};
exports.ContactsService = ContactsService;
exports.ContactsService = ContactsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContactsService);
//# sourceMappingURL=contacts.service.js.map