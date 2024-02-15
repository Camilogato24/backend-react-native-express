import { connectToDatabase } from "../connection/database";
import { User, Task } from "../models/models";

Task.belongsTo(User, { as: "Creador", foreignKey: "usuario_creador_id" });
Task.belongsTo(User, { as: "Asignado", foreignKey: "usuario_asignado_id" });

export const getTasks = async (req, res) => {
  try {
    await connectToDatabase();
    await Task.sync();

    const listTaks = await Task.findAll();
    console.log(
      "Todos los usuarios:",
      listTaks.map((task) => task.toJSON())
    );
    res.send(listTaks);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error al obtener las tareas');
  }
};

export const getTask = (req, res) => {
  res.send("Hola Cami");
};

export const getTasksCount = (req, res) => {
  res.send("Hola Cami");
};

export const createTasks = (req, res) => {
  res.send("Hola Cami");
};

export const deleteTasks = (req, res) => {
  res.send("Hola Cami");
};

export const updateTasks = (req, res) => {
  res.send("Hola Cami");
};
