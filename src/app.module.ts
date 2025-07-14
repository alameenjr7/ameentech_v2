import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ContactsModule } from './contacts/contacts.module';
import { ServicesModule } from './services/services.module';
import { ProjectsModule } from './projects/projects.module';
import { AboutModule } from './about/about.module';
import { SettingsModule } from './settings/settings.module';
import { BlogsModule } from './blogs/blogs.module';
import { EducationModule } from './education/education.module';
import { FaqsModule } from './faqs/faqs.module';
import { PricingPlansModule } from './pricing-plans/pricing-plans.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { ToolsModule } from './tools/tools.module';
import { WorkExperiencesModule } from './work-experiences/work-experiences.module';
import { MarqueesModule } from './marquees/marquee.module';
import { MailingModule } from './mailing/mailing.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    ContactsModule,
    ServicesModule,
    ProjectsModule,
    AboutModule,
    SettingsModule,
    BlogsModule,
    EducationModule,
    FaqsModule,
    PricingPlansModule,
    TestimonialsModule,
    ToolsModule,
    WorkExperiencesModule,
    MarqueesModule,
    MailingModule
  ],
})
export class AppModule {}
