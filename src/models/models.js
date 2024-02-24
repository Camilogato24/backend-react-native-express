import { DataTypes } from "sequelize";
import {sequelize} from "../connection/database.js";

export const User = sequelize.define("Uzer", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: {
        args: [
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$",
          "i",
        ],
        msg: "La contraseña debe contener al menos 8 caracteres, una letra minúscula, una letra mayúscula, un número y un carácter especial.",
      },
    },
  },
}, {
  timestamps: false // Esta línea debe estar aquí, fuera de la definición de atributos
});


export const Task = sequelize.define(
  "Tarea",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    fecha_completado: {
      type: DataTypes.DATE,
    },
    usuario_creador_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    usuario_asignado_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    timestamps: false
  }
);
