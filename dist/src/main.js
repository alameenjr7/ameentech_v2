"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const cors_config_1 = require("../libs/cors/cors.config");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', '..', 'uploads'), {
        prefix: '/uploads/',
    });
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
        .addTag('Authentification', 'Authentification management endpoints')
        .addTag('contacts', 'Contact management endpoints')
        .addTag('services', 'Service management endpoints')
        .addTag('projects', 'Project management endpoints')
        .addTag('abouts', 'About management endpoints')
        .addTag('education', 'Education management endpoints')
        .addTag('Utilisateurs', 'Utilisateur management endpoints')
        .addTag('settings', 'Settings management endpoints')
        .addTag('blogs', 'Blogs management endpoints')
        .addTag('faqs', 'Faqs management endpoints')
        .addTag('pricing-plans', 'Pricing-plans management endpoints')
        .addTag('testimonials', 'Testimonials management endpoints')
        .addTag('tools', 'Tools management endpoints')
        .addTag('work-experiences', 'Work-experiences management endpoints')
        .addTag('marquees', 'Marquee management endpoints')
        .addTag('default', 'Default management endpoints')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    const port = process.env.PORT || 3000;
    await app.listen(port, '0.0.0.0');
    console.log(`Application is running on port: ${port}`);
    console.log(`Swagger documentation available at: /api/docs`);
}
bootstrap().catch((error) => {
    console.error('Application failed to start:', error);
    process.exit(1);
});
//# sourceMappingURL=main.js.map