"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function generateSlug(text) {
    return text
        .toString()
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '')
        .replace(/--+/g, '-');
}
async function main() {
    console.log('🌱 Seeding database...');
    const services = [
        {
            title: 'Développement Web',
            description: 'Sites web modernes, applications web sur mesure avec les dernières technologies. Performance et expérience utilisateur optimales.',
            icon: 'fas fa-laptop-code',
            order: 1,
            isActive: true,
        },
        {
            title: 'Applications Mobile',
            description: 'Applications iOS et Android natives ou hybrides. Interface intuitive et fonctionnalités avancées pour vos utilisateurs.',
            icon: 'fas fa-mobile-alt',
            order: 2,
            isActive: true,
        },
        {
            title: 'Conseil Digital',
            description: 'Accompagnement stratégique dans votre transformation digitale. Audit, analyse et recommandations personnalisées.',
            icon: 'fas fa-chart-line',
            order: 3,
            isActive: true,
        },
        {
            title: 'Infrastructure IT',
            description: 'Audit et optimisation de vos systèmes d\'information. Solutions techniques au meilleur coût pour votre entreprise.',
            icon: 'fas fa-server',
            order: 4,
            isActive: true,
        },
    ];
    for (const service of services) {
        service.slug = generateSlug(service.title);
        await prisma.service.upsert({
            where: { slug: service.slug },
            update: service,
            create: service,
        });
    }
    console.log('✅ Services seeded successfully');
    const projects = [
        {
            title: 'E-commerce B2B',
            description: 'Plateforme de vente en ligne pour grossiste avec gestion avancée des stocks et facturation automatisée.',
            icon: 'fas fa-shopping-cart',
            technologies: JSON.stringify(['Laravel', 'Vue.js', 'MySQL']),
            clientName: 'Grossiste ABC',
            projectUrl: 'https://example-b2b.com',
            order: 1,
            isActive: true,
        },
        {
            title: 'Application Médicale',
            description: 'Système de gestion hospitalière avec prise de rendez-vous, dossiers patients et facturation.',
            icon: 'fas fa-hospital',
            technologies: JSON.stringify(['React Native', 'Node.js', 'MongoDB']),
            clientName: 'Clinique XYZ',
            projectUrl: 'https://example-medical.com',
            order: 2,
            isActive: true,
        },
        {
            title: 'Plateforme E-learning',
            description: 'LMS complet avec cours vidéo, quiz interactifs, suivi de progression et certification.',
            icon: 'fas fa-graduation-cap',
            technologies: JSON.stringify(['Django', 'React', 'PostgreSQL']),
            clientName: 'Institut de Formation',
            projectUrl: 'https://example-elearning.com',
            order: 3,
            isActive: true,
        },
        {
            title: 'Application de Livraison',
            description: 'Application mobile de livraison à domicile avec géolocalisation et paiement en ligne.',
            icon: 'fas fa-truck',
            technologies: JSON.stringify(['Flutter', 'Firebase', 'Stripe']),
            clientName: 'DeliveryFast',
            order: 4,
            isActive: true,
        },
        {
            title: 'Système de Gestion RH',
            description: 'Plateforme complète de gestion des ressources humaines avec paie, congés et évaluations.',
            icon: 'fas fa-users',
            technologies: JSON.stringify(['Angular', 'Spring Boot', 'Oracle']),
            clientName: 'Entreprise DEF',
            order: 5,
            isActive: true,
        },
    ];
    for (const project of projects) {
        project.slug = generateSlug(project.title);
        await prisma.project.upsert({
            where: { slug: project.slug },
            update: project,
            create: project,
        });
    }
    console.log('✅ Projects seeded successfully');
    const contacts = [
        {
            name: 'Jean Dupont',
            email: 'jean.dupont@example.com',
            phone: '+221 77 123 45 67',
            service: 'web',
            message: 'Bonjour, je souhaiterais développer un site web pour mon entreprise. Pouvez-vous me contacter pour discuter du projet ?',
        },
        {
            name: 'Marie Martin',
            email: 'marie.martin@example.com',
            phone: '+221 76 987 65 43',
            service: 'mobile',
            message: 'Nous avons besoin d\'une application mobile pour notre service de livraison. Merci de nous recontacter.',
        },
        {
            name: 'Ahmed Diallo',
            email: 'ahmed.diallo@example.com',
            phone: '+221 78 456 78 90',
            service: 'conseil',
            message: 'Notre entreprise souhaite une consultation pour sa transformation digitale.',
        },
    ];
    for (const contact of contacts) {
        await prisma.contact.upsert({
            where: { email: contact.email },
            update: contact,
            create: contact,
        });
    }
    console.log('✅ Sample contacts seeded successfully');
    console.log('🎉 Database seeding completed!');
}
main()
    .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map