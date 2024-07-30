import { Router } from "express";

import {
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent,
    getStudent
} from "../controllers/studentController.js"

const router = Router();

router.get("/", getAllStudents);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);
router.get("/:id", getStudent);

export default router;