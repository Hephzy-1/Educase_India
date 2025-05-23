import { Sequelize } from 'sequelize';
import mysql from 'mysql2/promise';
import env from './env.js';

async function createDatabaseIfNotExists() {
  const connection = await mysql.createConnection({
    host: env.DB_HOST,  
    user: env.DB_USER,
    password: env.DB_PASSWORD,
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${env.DB_NAME}\``);
  console.log(`✅ Database '${env.DB_NAME}' ensured`);
  await connection.end();
}
 
await createDatabaseIfNotExists();

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: 'mysql',
  logging: false
});

export default sequelize;