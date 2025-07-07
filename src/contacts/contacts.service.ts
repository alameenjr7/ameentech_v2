import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto, UpdateContactDto } from '../../libs/dto/contact.dto';
import { SearchDto } from '../../libs/global/search.dto';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  async create(createContactDto: CreateContactDto) {
    try {
      return await this.prisma.contact.create({
        data: {
          ...createContactDto,
          status: createContactDto.status || 'new',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Erreur lors de la création du contact');
    }
  }

  async findAll(searchDto?: SearchDto) {
    const {
      q,
      order_by = 'createdAt',
      order_dir = 'desc',
      limit,
      offset,
    } = searchDto || {};

    const where: any = {};

    // Recherche par nom, email ou message
    if (q) {
      where.OR = [
        { name: { contains: q } },
        { email: { contains: q } },
        { message: { contains: q } },
        { interest: { contains: q } },
      ];
    }

    const orderBy: any = {};
    if (order_by === 'name') {
      orderBy.name = order_dir;
    } else {
      orderBy.createdAt = order_dir;
    }

    try {
      return await this.prisma.contact.findMany({
        where,
        orderBy,
        take: limit,
        skip: offset,
      });
    } catch (error) {
      throw new BadRequestException('Erreur lors de la récupération des contacts');
    }
  }

  async findOne(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('ID invalide');
    }

    try {
      const contact = await this.prisma.contact.findUnique({
        where: { id },
      });

      if (!contact) {
        throw new NotFoundException(`Contact avec l'ID ${id} non trouvé`);
      }

      return contact;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Erreur lors de la récupération du contact');
    }
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('ID invalide');
    }

    // Vérifier que le contact existe
    await this.findOne(id);

    try {
      return await this.prisma.contact.update({
        where: { id },
        data: {
          ...updateContactDto,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Erreur lors de la mise à jour du contact');
    }
  }

  async remove(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('ID invalide');
    }

    // Vérifier que le contact existe
    await this.findOne(id);

    try {
      return await this.prisma.contact.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException('Erreur lors de la suppression du contact');
    }
  }

  async findByEmail(email: string) {
    if (!email || typeof email !== 'string') {
      throw new BadRequestException('Email invalide');
    }

    try {
      return await this.prisma.contact.findMany({
      where: { 
        email: {
          contains: email
        }
      },
        orderBy: {
          createdAt: 'desc',
        },
      });
    } catch (error) {
      throw new BadRequestException('Erreur lors de la recherche par email');
    }
  }

  async findByInterest(interest: string) {
    if (!interest || typeof interest !== 'string') {
      throw new BadRequestException('Interest invalide');
    }

    try {
      return await this.prisma.contact.findMany({
      where: { 
        interest: {
          contains: interest
        }
      },
        orderBy: {
          createdAt: 'desc',
        },
      });
    } catch (error) {
      throw new BadRequestException('Erreur lors de la recherche par interest');
    }
  }

  async findByStatus(status: string) {
    if (!status || typeof status !== 'string') {
      throw new BadRequestException('Statut invalide');
    }

    try {
      return await this.prisma.contact.findMany({
        where: { status: status },
        orderBy: {
          createdAt: 'desc',
        },
      });
    } catch (error) {
      throw new BadRequestException('Erreur lors de la recherche par statut');
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
    } catch (error) {
      throw new BadRequestException('Erreur lors de la récupération des statistiques');
    }
  }
}
