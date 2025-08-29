import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@ApiTags('Utilisateurs')
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Créer un nouvel utilisateur (Admin uniquement)' })
  @ApiResponse({
    status: 201,
    description: 'Utilisateur créé avec succès',
  })
  @ApiResponse({ status: 403, description: 'Accès interdit' })
  @ApiResponse({ status: 409, description: 'Email déjà utilisé' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Obtenir tous les utilisateurs (Admin uniquement)' })
  @ApiResponse({
    status: 200,
    description: 'Liste des utilisateurs',
  })
  @ApiResponse({ status: 403, description: 'Accès interdit' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Obtenir un utilisateur par ID (Admin uniquement)' })
  @ApiResponse({
    status: 200,
    description: 'Utilisateur trouvé',
  })
  @ApiResponse({ status: 403, description: 'Accès interdit' })
  @ApiResponse({ status: 404, description: 'Utilisateur non trouvé' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Mettre à jour un utilisateur (Admin uniquement)' })
  @ApiResponse({
    status: 200,
    description: 'Utilisateur mis à jour avec succès',
  })
  @ApiResponse({ status: 403, description: 'Accès interdit' })
  @ApiResponse({ status: 404, description: 'Utilisateur non trouvé' })
  @ApiResponse({ status: 409, description: 'Email déjà utilisé' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Supprimer un utilisateur (Admin uniquement)' })
  @ApiResponse({
    status: 200,
    description: 'Utilisateur supprimé avec succès',
  })
  @ApiResponse({ status: 403, description: 'Accès interdit' })
  @ApiResponse({ status: 404, description: 'Utilisateur non trouvé' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }

  @Patch(':id/toggle-active')
  @Roles('ADMIN')
  @ApiOperation({
    summary: 'Activer/Désactiver un utilisateur (Admin uniquement)',
  })
  @ApiResponse({
    status: 200,
    description: "Statut de l'utilisateur modifié avec succès",
  })
  @ApiResponse({ status: 403, description: 'Accès interdit' })
  @ApiResponse({ status: 404, description: 'Utilisateur non trouvé' })
  toggleActive(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.toggleActive(id);
  }
}
