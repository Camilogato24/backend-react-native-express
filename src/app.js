import express from "express";
import tasksRouter from "./routes/tasks"
import authRouter from "./routes/auth"

const app = express();
app.use(express.json());
app.use(tasksRouter);
app.use(authRouter);
export default app;

