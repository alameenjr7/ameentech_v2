"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const cors_config_1 = require("../libs/cors/cors.config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.enableCors(cors_config_1.corsConfig);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Mon Site Web API')
        .setDescription('API documentation for Mon Site Web backend')
        .setVersion('1.0')
        .addTag('contacts', 'Contact management endpoints')
        .addTag('services', 'Service management endpoints')
        .addTag('projects', 'Project management endpoints')
        .addTag('about', 'About management endpoints')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    const port = process.env.PORT || 3001;
    await app.listen(port);
    console.log(`Application is running on: http://localhost:${port}`);
    console.log(`Swagger documentation available at: http://localhost:${port}/api/docs`);
}
bootstrap().catch((error) => {
    console.error('Application failed to start:', error);
    process.exit(1);
});
//# sourceMappingURL=main.js.map