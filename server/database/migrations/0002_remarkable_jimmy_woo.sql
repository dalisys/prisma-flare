ALTER TABLE "user_schema"."posts" SET SCHEMA "public";
--> statement-breakpoint
ALTER TABLE "user_schema"."users" SET SCHEMA "public";
--> statement-breakpoint
DROP SCHEMA "user_schema";
