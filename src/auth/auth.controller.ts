import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  UseGuards,
  Request,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import {
  LoginDto,
  ChangePasswordDto,
  UpdateProfileDto,
} from '../../libs/dto/auth.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Public } from './decorators/public.decorator';

@ApiTags('Authentification')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Public()
  // @Post('register')
  // @HttpCode(HttpStatus.CREATED)
  // @ApiOperation({ summary: 'Inscription d\'un nouvel utilisateur' })
  // @ApiResponse({
  //   status: 201,
  //   description: 'Utilisateur créé avec succès',
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       user: {
  //         type: 'object',
  //         properties: {
  //           id: { type: 'number' },
  //           email: { type: 'string' },
  //           firstName: { type: 'string' },
  //           lastName: { type: 'string' },
  //           role: { type: 'string' },
  //           isActive: { type: 'boolean' },
  //           createdAt: { type: 'string' },
  //         },
  //       },
  //       token: { type: 'string' },
  //     },
  //   },
  // })
  // @ApiResponse({ status: 409, description: 'Email déjà utilisé' })
  // async register(@Body() registerDto: RegisterDto) {
  //   return this.authService.register(registerDto);
  // }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Connexion utilisateur' })
  @ApiResponse({
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
  })
  @ApiResponse({ status: 401, description: 'Email ou mot de passe incorrect' })
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Obtenir le profil de l'utilisateur connecté" })
  @ApiResponse({
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
  })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  getProfile(@Request() req: any) {
    return req.user;
  }

  @Post('change-password')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Changer le mot de passe' })
  @ApiResponse({
    status: 200,
    description: 'Mot de passe modifié avec succès',
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Non autorisé ou mot de passe incorrect',
  })
  async changePassword(
    @Request() req: any,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    return this.authService.changePassword(
      req.user.id,
      changePasswordDto.currentPassword,
      changePasswordDto.newPassword,
    );
  }

  @Patch('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Mettre à jour le profil utilisateur' })
  @ApiResponse({
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
  })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  @ApiResponse({
    status: 409,
    description: 'Email déjà utilisé par un autre utilisateur',
  })
  async updateProfile(
    @Request() req: any,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.authService.updateProfile(req.user.id, updateProfileDto);
  }
}
