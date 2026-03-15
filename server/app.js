import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import 'dotenv/config';

// Configuraciones para emular __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(cors()); // Permite peticiones de otros orígenes
app.use(express.json()); // Permite a Express leer el req.body (lo usarás para el Formulario de contacto)
app.use(express.urlencoded({ extended: true })); 

// Archivos Estáticos (Frontend)
// Express servirá automáticamente tu "index.html" y tu CSS/JS alojado en la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de API (Ejemplo para cuando hagas tu formulario)
// import contactRouter from './src/routes/contact.router.js';
// app.use('/api/contact', contactRouter);

// Ruta por defecto (Fallback) 
// Si alguien entra a una ruta que no existe, los mandas siempre al index.html
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor del Portfolio corriendo en http://localhost:${PORT}`);
});