import createClient from 'serverless-pg';
 
const dbClient = createClient({
  config: {
    host: process.env.DB_HOST,
    port: process.env.POSTGRESQL_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  onConnect: () => {},
  onClose: () => {},
  beforeQuery: () => {},
  afterQuery: () => {},
});
 
export default dbClient;