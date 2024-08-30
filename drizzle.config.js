/** @type {import('drizzle-kit').Config} */
export default {
  schema: "./app/utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:ozTD7a9sOVHM@ep-spring-moon-a5hz0qok.us-east-2.aws.neon.tech/neondb?sslmode=require',
  }
};
