const { Sequelize, DataTypes } = require('sequelize');

export const sequelize = new Sequelize('railway', 'root', '4A-A1GfGe13b3heCA6-3hB5HbH36ehha', {
    host: 'monorail.proxy.rlwy.net',
    dialect: 'mysql',
    port: '23051',
  });

// const User = sequelize.define('User', {
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// });

export async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos MySQL con Sequelize');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

// async function exampleUsage() {
//   try {
//     await connectToDatabase(); 
//     await sequelize.sync();

//     const newUser = await User.create({
//       firstName: 'John',
//       lastName: 'Doe'
//     });

//     console.log('Usuario creado:', newUser.toJSON());

//     const allUsers = await User.findAll();
//     console.log('Todos los usuarios:', allUsers.map(user => user.toJSON()));
//   } catch (error) {
//     console.error('Error:', error);
//   } finally {
//     await sequelize.close();
//   }
// }

// exampleUsage();
