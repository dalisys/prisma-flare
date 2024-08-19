CREATE SCHEMA "user_schema";
--> statement-breakpoint
ALTER TABLE "public"."posts" SET SCHEMA "user_schema";
--> statement-breakpoint
ALTER TABLE "public"."users" SET SCHEMA "user_schema";
