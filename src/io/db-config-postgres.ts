import { Sequelize } from 'sequelize';

const config = {
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
};

export default new Sequelize(config.database, config.user, config.password, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: true, 
});