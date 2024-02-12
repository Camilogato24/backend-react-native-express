import { Router } from "express";
import { getTaks } from "../controllers/tasks";
const router = Router()

router.get("/tasks", getTaks)
router.get("/tasks/count")
router.get("/tasks/:id")
router.post("/tasks")
router.delete("/tasks/:id")
router.put("/tasks/:id")

export default router