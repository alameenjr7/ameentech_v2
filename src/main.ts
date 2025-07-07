import { NestFactory } from '@nestjs/core';
import { ValidationPipe, INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { corsConfig } from '../libs/cors/cors.config';

async function bootstrap(): Promise<void> {

  const app: INestApplication = await NestFactory.create(AppModule);

  // Configuration globale
  app.setGlobalPrefix('api');

  // Configuration CORS
  app.enableCors(corsConfig);


  // Configuration de la validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Supprime les propriétés non décorées
      transform: true, // Transforme automatiquement les types
      forbidNonWhitelisted: true, // Rejette les requêtes avec des propriétés non autorisées
    }),
  );

  // Configuration Swagger
  const config = new DocumentBuilder()
    .setTitle('Mon Site Web API')
    .setDescription('API documentation for Mon Site Web backend')
    .setVersion('1.0')
    .addTag('contacts', 'Contact management endpoints')
    .addTag('services', 'Service management endpoints')
    .addTag('projects', 'Project management endpoints')
    .addTag('about', 'About management endpoints')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger documentation available at: http://localhost:${port}/api/docs`);
}

bootstrap().catch((error) => {
  console.error('Application failed to start:', error);
  process.exit(1);
});
