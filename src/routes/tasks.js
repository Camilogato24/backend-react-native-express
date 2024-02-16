import { Router } from "express";
import {
  createTasks,
  deleteTasks,
  getTask,
  getTasks,
  getTasksCount,
  updateTasks,
} from "../controllers/tasks";
import validateToken from "../routes/validate-token";
const tasksRouter = Router();

tasksRouter.get("/tasks", validateToken, getTasks);
tasksRouter.get("/tasks/count", getTasksCount);
tasksRouter.get("/tasks/:id", getTask);
tasksRouter.post("/tasks", createTasks);
tasksRouter.delete("/tasks/:id", deleteTasks);
tasksRouter.put("/tasks/:id", updateTasks);

export default tasksRouter;
