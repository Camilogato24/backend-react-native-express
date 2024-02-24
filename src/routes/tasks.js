import { Router } from "express";
import {
  createTasks,
  deleteTasks,
  getTask,
  getTasks,
  getTasksCount,
  updateTasks,
} from "../controllers/tasks.js";
import validateToken from "../routes/validate-token.js";
const tasksRouter = Router();

tasksRouter.get("/tasks", validateToken, getTasks);
tasksRouter.get("/tasks/count", validateToken, getTasksCount);
tasksRouter.get("/tasks/:id", validateToken, getTask);
tasksRouter.post("/tasks", validateToken, createTasks);
tasksRouter.delete("/tasks/:id", validateToken, deleteTasks);
tasksRouter.put("/tasks/:id", validateToken, updateTasks);

export default tasksRouter;
