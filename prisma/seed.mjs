// Import the Prisma Client
import { PrismaClient } from "@prisma/client";

// Instantiate the Prisma Client
const prisma = new PrismaClient();

// Define the async function to seed the database
async function main() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      email: "alice@example.com",
      name: "Alice",
      posts: {
        create: [
          {
            title: "Hello World",
            content: "This is my first post!",
            published: true,
          },
          {
            title: "Prisma is awesome",
            content: "I love using Prisma with PostgreSQL!",
            published: false,
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: "bob@example.com",
      name: "Bob",
      posts: {
        create: [
          {
            title: "Another post",
            content: "Prisma makes database management easy.",
            published: true,
          },
        ],
      },
    },
  });

  console.log({ user1, user2 });
}

// Execute the main function and catch any errors
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
