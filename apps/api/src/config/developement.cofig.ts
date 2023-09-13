import dotenv from "dotenv";

dotenv.config();

interface Config {
  PORT: number;
  SECRET_KEY: string;
  LOCAL_DB: string;
}

const config: Config = {
  PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  SECRET_KEY: process.env.SECRETE_KEY || "RunForestRun",
  LOCAL_DB: process.env.LOCAL_DB || "mongodb://localhost:27017/ecomapp",
};

export default config;
