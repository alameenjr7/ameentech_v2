import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AboutService } from './about.service';
import { AboutDto, UpdateAboutDto } from '../../libs/dto/about.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SearchDto } from '../../libs/global/search.dto';
import { ErrorResponse } from '../../libs/errors/error.response';

@ApiTags('about')
@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Post()
  @ApiOperation({ summary: 'Créer une nouvelle section About' })
  @ApiResponse({ status: 201, description: 'Section About créée avec succès', type: AboutDto })
  @ApiResponse({ status: 400, description: 'Requête invalide', type: ErrorResponse })
  create(@Body() createAboutDto: AboutDto) {
    return this.aboutService.create(createAboutDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer toutes les sections About' })
  @ApiResponse({ status: 200, description: 'Liste des sections About', type: [AboutDto] })
  @ApiResponse({ status: 400, description: 'Paramètres de recherche invalides', type: ErrorResponse })
  findAll(@Query() searchDto: SearchDto) {
    return this.aboutService.findAll(searchDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une section About par ID' })
  @ApiResponse({ status: 200, description: 'Section About trouvée', type: AboutDto })
  @ApiResponse({ status: 404, description: 'Section About non trouvée', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'ID invalide', type: ErrorResponse })
  findOne(@Param('id') id: string) {
    return this.aboutService.findOne(Number(id));
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour une section About' })
  @ApiResponse({ status: 200, description: 'Section About mise à jour', type: AboutDto })
  @ApiResponse({ status: 404, description: 'Section About non trouvée', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'Données de mise à jour invalides', type: ErrorResponse })
  update(@Param('id') id: string, @Body() updateAboutDto: UpdateAboutDto) {
    return this.aboutService.update(Number(id), updateAboutDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une section About' })
  @ApiResponse({ status: 200, description: 'Section About supprimée' })
  @ApiResponse({ status: 404, description: 'Section About non trouvée', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'ID invalide', type: ErrorResponse })
  remove(@Param('id') id: string) {
    return this.aboutService.remove(Number(id));
  }
}
