// backend/index.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Crear tabla si no existe
pool.query(`
  CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    message TEXT
  )
`);

// Ruta para agregar contacto
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const result = await pool.query(
    'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *',
    [name, email, message]
  );
  res.json(result.rows[0]);
});

// Ruta para obtener todos los contactos
app.get('/api/contact', async (req, res) => {
  const result = await pool.query('SELECT * FROM contacts ORDER BY id DESC');
  res.json(result.rows);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor backend en puerto ${PORT}`));
