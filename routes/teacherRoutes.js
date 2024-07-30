import { Router } from "express";
import {
  getAllTeachers,
  createTeacher,
  updateTeacher,
  deleteTeacher,
  getTeacher,
} from "../controllers/teacherController.js";

const router = Router();

router.get("/", getAllTeachers);
router.post("/", createTeacher);
router.put("/:id", updateTeacher);
router.delete("/:id", deleteTeacher);
router.get("/:id", getTeacher);

export default router;