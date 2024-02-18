import express from "express";
import tasksRouter from "./routes/tasks"
import authRouter from "./routes/auth"
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("dev"))
app.use(cors());
app.use(tasksRouter);
app.use(authRouter);
export default app;

