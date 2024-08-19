import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import "dotenv/config"; // Ensure environment variables are loaded
import * as schema from "./schema";
// Create a new PostgreSQL Client instance with SSL and environment variables
export const client = postgres({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    ca: process.env.DB_SSL_CA_CERT,
  },
});

// Connect the client

// Initialize Drizzle with the PostgreSQL client
export const db = drizzle(client, { schema });
