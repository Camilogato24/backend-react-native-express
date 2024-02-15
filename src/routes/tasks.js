import { Router } from "express";
import {
  createTasks,
  deleteTasks,
  getTask,
  getTasks,
  getTasksCount,
  updateTasks,
} from "../controllers/tasks";
const tasksRouter = Router();

tasksRouter.get("/tasks", getTasks);
tasksRouter.get("/tasks/count", getTasksCount);
tasksRouter.get("/tasks/:id", getTask);
tasksRouter.post("/tasks", createTasks);
tasksRouter.delete("/tasks/:id", deleteTasks);
tasksRouter.put("/tasks/:id", updateTasks);

export default tasksRouter;
