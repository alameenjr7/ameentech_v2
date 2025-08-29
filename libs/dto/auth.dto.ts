import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'contact@ameenaltech.com',
    description: "Email de l'utilisateur",
  })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'admin123', description: 'Mot de passe' })
  @IsString()
  @MinLength(6)
  password: string;
}

export class RegisterDto {
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
}

export class ChangePasswordDto {
  @ApiProperty({ description: 'Ancien mot de passe' })
  @IsString()
  currentPassword: string;

  @ApiProperty({ description: 'Nouveau mot de passe' })
  @IsString()
  @MinLength(6)
  newPassword: string;
}

export class UpdateProfileDto {
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
    example: 'user@example.com',
    description: "Email de l'utilisateur",
    required: false,
  })
  @IsOptional()
  @IsEmail()
  email?: string;
}
