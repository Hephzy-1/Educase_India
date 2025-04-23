import dotenv from 'dotenv';

dotenv.config();

const env = {
  PORT: process.env.PORT || 3000,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASS,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY || '1h',
}
  
export default env;