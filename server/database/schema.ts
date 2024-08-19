// server/database/schema.ts
import { integer, pgTable, serial, text, boolean } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content"),
  published: boolean("published").notNull().default(false),
  authorId: integer("author_id")
    .notNull()
    .references(() => users.id),
});

export const userRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));

export const postRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
}));
