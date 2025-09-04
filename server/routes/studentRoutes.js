import express from 'express';
import {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
} from '../controllers/studentController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/students',verifyToken ,getAllStudents);
router.get('/student/:id', verifyToken, getStudentById);
router.post('/student', verifyToken, createStudent);
router.put('/student/:id', verifyToken, updateStudent);
router.delete('/students/:id', verifyToken, deleteStudent);

export default router;
