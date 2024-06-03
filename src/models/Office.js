import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';  // Ajusta la ruta según tu estructura


export const Office = sequelize.define('Office', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  medicId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default Office;
