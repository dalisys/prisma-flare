import { defineConfig } from "drizzle-kit";
import "dotenv/config"; // make sure to install dotenv package

export default defineConfig({
  dialect: "postgresql",
  schema: "./server/database/schema.ts",
  out: "./server/database/migrations",
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT!),
    user: process.env.DB_USERNAME!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    ssl: {
      ca: process.env.DB_SSL_CA_CERT!,
    },
  },
  // Print all statements
  verbose: true,
  // Always ask for confirmation
  // strict: true,
});
