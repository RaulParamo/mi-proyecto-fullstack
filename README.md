# Proyecto Fullstack con React, Node.js, TypeScript y PostgreSQL

Este es un proyecto fullstack diseñado para demostrar una arquitectura moderna de desarrollo web utilizando buenas prácticas del ecosistema JavaScript y TypeScript.
Incluye una interfaz atractiva y responsiva y una base de datos en PostgreSQL.

## 🚀 Tecnologías utilizadas

### Frontend:
- **React**: Biblioteca de JavaScript para crear interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **CSS modularizado**: Estilos por componente, organizados en archivos individuales como `Hero.css`, `Form.css`, etc.
- **Axios**: Cliente HTTP para consumir la API del backend.

### Backend:
- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **TypeScript**: Tipado seguro y mantenible en el servidor.
- **dotenv**: Manejo seguro de variables de entorno.

### Base de Datos:
- **PostgreSQL**: Sistema de base de datos relacional robusto y escalable.
- **pg (node-postgres)**: Librería para interactuar con PostgreSQL desde Node.js.

### 📬 Funcionalidades
Formulario de contacto con nombre, correo y mensaje.

Validaciones básicas de campos.

Envío de datos al backend vía API.

Persistencia en PostgreSQL.





## 🔒 Seguridad

Al ser un pequeño proyecto comparto por aqui los valores para lo conexion

## 📦 Instalación

📋 Prerrequisitos
Node.js 
npm 
PostgreSQL (instalado y corriendo)
psql -U postgres -h localhost
Ingresa la contraseña (admin) cuando se solicite
CREATE DATABASE contact_db



## Clona el repositorio
git clone https://github.com/RaulParamo/mi-proyecto-fullstack.git



## Crea un archivo .env en la carpeta backend con este contenido 
- PORT=5000
- DB_HOST=localhost
- DB_USER=postgres
- DB_PASSWORD=admin
- DB_NAME=contact_db
- DB_PORT=5432




## Inicia el proyecto en el backend y frontend

# cd mi-proyecto-fullstack
- cd backend  
- npm init -y
- node index.js

# cd mi-proyecto-fullstack
- cd frontend 
- npm install
- npm run start
