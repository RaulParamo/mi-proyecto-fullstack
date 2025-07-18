// backend/db.js
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,           // postgres
  host: process.env.DB_HOST,           // localhost
  database: process.env.DB_NAME,       // contact_db
  password: process.env.DB_PASSWORD,   // admin
  port: parseInt(process.env.DB_PORT, 10), // 5432
});

console.log('Password:', process.env.DB_PASSWORD, typeof process.env.DB_PASSWORD); // Para verificar

module.exports = pool;

