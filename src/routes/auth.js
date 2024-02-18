import { Router } from "express";
import { register, login } from "../controllers/auth";
import { listUsers } from "../controllers/users";
import validateToken from "../routes/validate-token";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/users", validateToken, listUsers)

export default authRouter;
