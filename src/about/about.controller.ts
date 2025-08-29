import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { AboutService } from './about.service';
import { AboutDto, UpdateAboutDto } from '../../libs/dto/about.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiConsumes,
  ApiBody,
} from '@nestjs/swagger';
import { SearchDto } from '../../libs/global/search.dto';
import { ErrorResponse } from '../../libs/errors/error.response';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('abouts')
@Controller('abouts')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Post()
  @ApiOperation({ summary: 'Créer une nouvelle section About' })
  @ApiResponse({ status: 201, description: 'Section About créée avec succès' })
  @ApiResponse({ status: 400, description: 'Requête invalide' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
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
  })
  @UseInterceptors(FileInterceptor('imageUrl'))
  create(
    @Body() createAboutDto: AboutDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.aboutService.create(createAboutDto, file);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer toutes les sections About' })
  @ApiResponse({
    status: 200,
    description: 'Liste des sections About',
    type: [AboutDto],
  })
  @ApiResponse({
    status: 400,
    description: 'Paramètres de recherche invalides',
    type: ErrorResponse,
  })
  findAll(@Query() searchDto: SearchDto) {
    return this.aboutService.findAll(searchDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une section About par ID' })
  @ApiResponse({
    status: 200,
    description: 'Section About trouvée',
    type: AboutDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Section About non trouvée',
    type: ErrorResponse,
  })
  @ApiResponse({ status: 400, description: 'ID invalide', type: ErrorResponse })
  findOne(@Param('id') id: string) {
    return this.aboutService.findOne(Number(id));
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour une section About' })
  @ApiResponse({ status: 200, description: 'Section About mise à jour' })
  @ApiResponse({ status: 404, description: 'Section About non trouvée' })
  @ApiResponse({ status: 400, description: 'Données invalides' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description:
      'Données pour mettre à jour la section "À propos". Tous les champs sont optionnels.',
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
  })
  @UseInterceptors(FileInterceptor('imageUrl'))
  update(
    @Param('id') id: string,
    @Body() updateAboutDto: UpdateAboutDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.aboutService.update(Number(id), updateAboutDto, file);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une section About' })
  @ApiResponse({ status: 200, description: 'Section About supprimée' })
  @ApiResponse({
    status: 404,
    description: 'Section About non trouvée',
    type: ErrorResponse,
  })
  @ApiResponse({ status: 400, description: 'ID invalide', type: ErrorResponse })
  remove(@Param('id') id: string) {
    return this.aboutService.remove(Number(id));
  }
}
