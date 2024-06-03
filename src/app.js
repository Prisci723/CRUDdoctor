// // app.js
// import express from 'express';
// import router from './routes/medic.routes.js';  // Asegúrate de que la ruta es correcta
// import { initializeDatabase } from './database/database.js';  // Asegúrate de que la ruta es correcta

// const app = express();

// // Middlewares
// app.use(express.json()); // Para parsear el cuerpo de las peticiones con formato JSON

// // Inicializar la base de datos antes de montar las rutas
// initializeDatabase().then(() => {
//   // Usar las rutas
//   app.use('/medics', router);  // Aquí se monta el router en la ruta /medics

//   // Iniciar el servidor
//   const PORT = 3000;
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// });

// // Exportar la app
// export default app;


import express from 'express';
import router from './routes/medic.routes.js';  // Asegúrate de que la ruta es correcta

const app = express();

// Middlewares
app.use(express.json()); // Para parsear el cuerpo de las peticiones con formato JSON
import { sequelize } from './database/database.js'; // Ajusta la ruta según tu estructura

const initializeDatabase = async () => {
  try {
    await sequelize.sync(); // Esto sincroniza todos los modelos con la base de datos
    console.log('Database synchronized');
  } catch (error) {
    console.error('Unable to synchronize the database:', error);
  }
};

initializeDatabase(); // Llama a esta función al iniciar tu aplicación

// Usar las rutas
app.use('/medics', router);  // Aquí se monta el router en la ruta /medics

// Exportar la app
export default app;