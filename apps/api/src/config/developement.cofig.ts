import dotenv from "dotenv";

dotenv.config();

interface Config {
  PORT: number;
  SECRET_KEY: string;
  LOCAL_DB: string;
  STRIPE_SECRET_KEY: string;
  STRIPE_PUBLIC_KEY: string;
}

const config: Config = {
  PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  SECRET_KEY: process.env.SECRETE_KEY || "RunForestRun",
  LOCAL_DB: process.env.LOCAL_DB || "mongodb://localhost:27017/ecomapp",
  STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLISHABLE_KEY || "",
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || "",
};

export default config;
