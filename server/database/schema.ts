import { pgTable, serial, varchar, boolean, integer, text } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/pg';
import { Client } from 'pg';

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});
await client.connect();

export const db = drizzle(client);

// Define the User table
export const users = pgTable('User', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }),
});

// Define the Post table
export const posts = pgTable('Post', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content'),
  published: boolean('published').notNull().default(false),
  authorId: integer('authorId').notNull(),
});

// Define relations between the tables
export const userRelations = relations(users, ({ one, many }) => ({
  posts: many(posts),
}));

export const postRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
}));
