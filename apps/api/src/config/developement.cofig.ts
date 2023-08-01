import dotenv from 'dotenv'

dotenv.config();

const config = {
    PORT: process.env.PORT,
    SECRETE_KEY:process.env.SECRETE_KEY
}

export default config;