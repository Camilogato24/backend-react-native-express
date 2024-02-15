import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('railway', 'root', '4A-A1GfGe13b3heCA6-3hB5HbH36ehha', {
    host: 'monorail.proxy.rlwy.net',
    dialect: 'mysql',
    port: '23051',
  });

export async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos MySQL con Sequelize');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}
