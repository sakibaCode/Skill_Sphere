import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db("skill_sphere");

export const auth = betterAuth({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  trustedOrigins: [process.env.NEXT_PUBLIC_BASE_URL],
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
});