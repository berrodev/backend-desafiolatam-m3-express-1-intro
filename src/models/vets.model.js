import { DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize.js';

export const Vets = sequelize.define(
  'vet_clinics',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true, underscored: true }
);
