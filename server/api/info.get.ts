import { db } from "~/server/database/db";
import { users, posts } from "~/server/database/schema";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const userData = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      posts: posts,
    })
    .from(users)
    .leftJoin(posts, eq(posts.authorId, users.id)); // Assuming posts have an authorId field

  // Group posts under each user
  const groupedUsers = userData.reduce((acc, curr) => {
    const userId = curr.id;
    if (!acc[userId]) {
      acc[userId] = {
        id: curr.id,
        name: curr.name!,
        email: curr.email,
        posts: [],
      };
    }
    if (curr.posts) {
      acc[userId].posts.push(curr.posts);
    }
    return acc;
  }, {} as Record<number, { id: number; name: string; email: string; posts: (typeof posts)[] }>);

  return Object.values(groupedUsers); // Convert the grouped users back to an array
});
