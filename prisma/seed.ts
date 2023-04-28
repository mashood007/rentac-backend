// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two brnads
  const brand1 = await prisma.brand.upsert({
    where: { name: 'Nissan' },
    update: {},
    create: {
      name: 'Nissan'
    },
  });

  const brand2 = await prisma.brand.upsert({
    where: { name: 'Toyota' },
    update: {},
    create: {
      name: 'Toyota'
    },
  });

  console.log({ brand1, brand2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
