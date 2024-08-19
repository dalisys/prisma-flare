import { pgTable, foreignKey, serial, text, boolean, integer, unique } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const posts = pgTable("posts", {
	id: serial("id").primaryKey().notNull(),
	title: text("title").notNull(),
	content: text("content"),
	published: boolean("published").default(false).notNull(),
	author_id: integer("author_id").notNull().references(() => users.id),
});

export const users = pgTable("users", {
	id: serial("id").primaryKey().notNull(),
	email: text("email").notNull(),
	name: text("name"),
},
(table) => {
	return {
		users_email_unique: unique("users_email_unique").on(table.email),
	}
});