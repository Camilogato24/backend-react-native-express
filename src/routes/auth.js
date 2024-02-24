import { Router } from "express";
import { register, login } from "../controllers/auth.js";
import { listUsers } from "../controllers/users.js";
import validateToken from "../routes/validate-token.js";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/users", validateToken, listUsers)

export default authRouter;
