"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_module_1 = require("./prisma/prisma.module");
const contacts_module_1 = require("./contacts/contacts.module");
const services_module_1 = require("./services/services.module");
const projects_module_1 = require("./projects/projects.module");
const about_module_1 = require("./about/about.module");
const settings_module_1 = require("./settings/settings.module");
const blogs_module_1 = require("./blogs/blogs.module");
const education_module_1 = require("./education/education.module");
const faqs_module_1 = require("./faqs/faqs.module");
const pricing_plans_module_1 = require("./pricing-plans/pricing-plans.module");
const testimonials_module_1 = require("./testimonials/testimonials.module");
const tools_module_1 = require("./tools/tools.module");
const work_experiences_module_1 = require("./work-experiences/work-experiences.module");
const marquee_module_1 = require("./marquees/marquee.module");
const mailing_module_1 = require("./mailing/mailing.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            prisma_module_1.PrismaModule,
            contacts_module_1.ContactsModule,
            services_module_1.ServicesModule,
            projects_module_1.ProjectsModule,
            about_module_1.AboutModule,
            settings_module_1.SettingsModule,
            blogs_module_1.BlogsModule,
            education_module_1.EducationModule,
            faqs_module_1.FaqsModule,
            pricing_plans_module_1.PricingPlansModule,
            testimonials_module_1.TestimonialsModule,
            tools_module_1.ToolsModule,
            work_experiences_module_1.WorkExperiencesModule,
            marquee_module_1.MarqueesModule,
            mailing_module_1.MailingModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map