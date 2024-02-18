import { Sequelize } from 'sequelize';
import { config } from "../config";


export const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql',
    port: config.port,
  });

export async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos MySQL con Sequelize');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}
