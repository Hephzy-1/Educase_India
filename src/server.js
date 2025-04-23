import sequelize from './config/db.js';
import env from './config/env.js';
import app from './app.js';

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully');

    app.listen(env.PORT, () => {
      console.log(`Server running at http://localhost:${env.PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
  }
})();