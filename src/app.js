import express from "express";
import tasksRouter from "./routes/tasks"
const app = express();

app.use(tasksRouter)
export default app;

