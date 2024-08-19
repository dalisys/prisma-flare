// scripts/seed.ts
import { db, client } from "~/server/database/db"; // Adjust the path to your db.ts
import { users, posts } from "~/server/database/schema";
import { eq } from "drizzle-orm";

async function seed() {
  // Insert users
  await db.insert(users).values([
    { email: "alice@example.com", name: "Alice" },
    { email: "bob@example.com", name: "Bob" },
  ]);

  // Get the user IDs (assuming they auto-increment)
  const alice = await db
    .select({ id: users.id })
    .from(users)
    .where(eq(users.email, "alice@example.com"));
  const bob = await db
    .select({ id: users.id })
    .from(users)
    .where(eq(users.email, "bob@example.com"));

  // Insert posts
  if (alice && bob) {
    await db.insert(posts).values([
      {
        title: "First Post",
        content: "This is Alice's first post",
        published: true,
        authorId: alice[0].id,
      },
      {
        title: "Second Post",
        content: "This is Bob's first post",
        published: false,
        authorId: bob[0].id,
      },
    ]);
  }

  console.log("Seeding completed!");
}

// Run the seed function
seed()
  .catch((err) => {
    console.error("Seeding failed:", err);
  })
  .finally(() => {
    // Close the database connection
    client.end(); // Make sure to close the connection
  });
