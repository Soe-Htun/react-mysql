import express from 'express';
import {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
} from '../controllers/studentController.js';

const router = express.Router();

router.get('/students', getAllStudents);
router.get('/student/:id', getStudentById);
router.post('/student', createStudent);
router.put('/student/:id', updateStudent);
router.delete('/students/:id', deleteStudent);

export default router;
