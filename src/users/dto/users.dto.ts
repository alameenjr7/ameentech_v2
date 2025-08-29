import {
  IsEmail,
  IsString,
  MinLength,
  IsOptional,
  IsEnum,
  IsBoolean,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
}

export class CreateUserDto {
  @ApiProperty({
    example: 'user@example.com',
    description: "Email de l'utilisateur",
  })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123', description: 'Mot de passe' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'John', description: 'Prénom', required: false })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiProperty({
    example: 'Doe',
    description: 'Nom de famille',
    required: false,
  })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiProperty({
    enum: UserRole,
    example: UserRole.USER,
    description: "Rôle de l'utilisateur",
    required: false,
  })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}

export class UpdateUserDto {
  @ApiProperty({
    example: 'user@example.com',
    description: "Email de l'utilisateur",
    required: false,
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ example: 'John', description: 'Prénom', required: false })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiProperty({
    example: 'Doe',
    description: 'Nom de famille',
    required: false,
  })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiProperty({
    enum: UserRole,
    example: UserRole.USER,
    description: "Rôle de l'utilisateur",
    required: false,
  })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;

  @ApiProperty({
    example: true,
    description: "Statut actif de l'utilisateur",
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
