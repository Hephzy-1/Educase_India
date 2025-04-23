import dotenv from 'dotenv';

dotenv.config();

const env = {
  PORT: process.env.PORT || 3000,
  DB_NAME: process.env.DB_NAME || process.env.MYSQL_DATABASE,
  DB_USER: process.env.DB_USER || process.env.MYSQLUSER,
  DB_HOST: process.env.DB_HOST || process.env.MYSQLHOST,
  DB_PASSWORD: process.env.DB_PASS || process.env.MYSQLPASSWORD,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY || '1h',
}
  
export default env;