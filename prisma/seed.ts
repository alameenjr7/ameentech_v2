import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();


async function main() {
  console.log('🌱 Seeding database...');

  // Seed Admin User
  const adminPassword = await bcrypt.hash('admin123', 12);
  await prisma.user.upsert({
    where: { email: 'contact@ameenaltech.com' },
    update: {},
    create: {
      email: 'contact@ameenaltech.com',
      password: adminPassword,
      firstName: 'Contact',
      lastName: 'System',
      role: 'ADMIN',
      isActive: true,
    },
  });
  console.log('✅ Admin user seeded successfully');

  // Seed Default User
  const defaultPassword = await bcrypt.hash('user123', 12);
  await prisma.user.upsert({
    where: { email: 'user@ameenaltech.com' },
    update: {},
    create: {
      email: 'user@ameenaltech.com',
      password: defaultPassword,
      firstName: 'Default',
      lastName: 'User',
      role: 'USER',
      isActive: true,
    },
  });
  console.log('✅ Default user seeded successfully');


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
