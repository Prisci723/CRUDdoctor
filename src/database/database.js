import Sequelize from "sequelize";

export const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: 'sequelize.sqlite',
  });
// import { Sequelize } from 'sequelize';
// import Medic from '../models/Medic.js';  // Ajusta la ruta según tu estructura
// import Office from '../models/Office.js';  // Ajusta la ruta según tu estructura

// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: './database.sqlite'  // Ruta a tu archivo de base de datos SQLite
// });

// const initializeDatabase = async () => {
//   try {
//     await sequelize.sync({ force: true }); // 'force: true' recreará las tablas en cada inicio, usar 'false' para no eliminar datos existentes
//     console.log('Database synchronized');
//   } catch (error) {
//     console.error('Unable to synchronize the database:', error);
//   }
// };

// export { sequelize, initializeDatabase, Medic, Office };


//* export const sequelize = new Sequelize(
//  "projectsdb", // db name,
//  "postgres", // username
//  "mysecretpassword", // password
//  {
//    host: "localhost",
//    dialect: "sqlite",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
//  }
// );

