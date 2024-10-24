import { PrismaClient } from "@prisma/client";
/* import { faker } from "@faker-js/faker";
 */ const prisma = new PrismaClient();

async function main() {
  //Create User
  /*  await prisma.user.create({
    data: {
      email: "rady@gmail.com",
      name: "Rady",
      address: {
        city: "Elmahalla",
        state: "Gharbia",
        street: "shaltoat Street",
        zip: "2004",
      },
    },
  }); */
  //Creat Many User
  /* await prisma.user.createMany({
    data: Array.from({ length: 15 }, () => ({
      email: faker.internet.email(),
      name: faker.internet.userName(),

    })),
  }); */
  /*  await prisma.todo.createMany({
    data: Array.from({ length: 10 }, () => ({
      title: faker.lorem.words({ min: 2, max: 5 }),
      body: faker.lorem.words({ min: 1, max: 10 }),
    })),
  }); */
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect(); //وقف الاتصال بين الداتا بيز
  });
