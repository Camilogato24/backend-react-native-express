import { connectToDatabase } from "../connection/database";
import { User, Task } from "../models/models";

User.hasMany(Task, { as: 'TareasCreadas', foreignKey: 'usuario_creador_id' });
User.hasMany(Task, { as: 'TareasAsignadas', foreignKey: 'usuario_asignado_id' });
Task.belongsTo(User, { as: "Creador", foreignKey: "usuario_creador_id" });
Task.belongsTo(User, { as: "Asignado", foreignKey: "usuario_asignado_id" });

export const getTasks = async (req, res) => {
  try {
    await connectToDatabase();
    await Task.sync();
    const listTaks = await Task.findAll();
    res.status(200).json({
      data: listTaks
    })
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error al obtener las tareas");
  }
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    await connectToDatabase();
    await Task.sync();
    const task = await Task.findOne({ where: { id: id } });
    res.status(200).json({
      data: task
    })
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send(`Error al obtener la tarea.`);
  }
};

export const getTasksCount = async (req, res) => {
  try {
    await connectToDatabase();
    await Task.sync();
    const allTasksCount = await Task.count();
    res.status(200).json({
      data: allTasksCount
    })
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send(`Error al obtener la cantidad total de tareas.`);
  }
};

export const createTasks = async (req, res) => {
  const { titulo, usuario_creador_id } = req.body
  try {
    await connectToDatabase();
    await Task.sync();
    await Task.create({
      titulo,
      usuario_creador_id,
    })
    res.status(201).json({
      msg: 'Tarea creada exitosamente'
    })
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send(`Error al crear la tarea.`);
  }
};

export const deleteTasks = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({
      where: {
        id: id
      }
    });
    res.status(200).json({
      msg: 'Tarea eliminada exitosamente'
    })
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send(`Error al actualizar la tarea.`);
  }
};

export const updateTasks = async (req, res) => {
  const { id } = req.params;
  const { titulo, estado } = req.body

  try {
    await Task.update({ titulo: titulo, estado: estado }, {
      where: {
        id: id
      }
    });
    res.status(201).json({
      msg: 'Tarea actualizada exitosamente'
    })
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send(`Error al actualizar la tarea.`);
  }
};
