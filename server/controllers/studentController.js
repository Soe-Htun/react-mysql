import db from '../db/index.js';

// Get all students
export const getAllStudents = (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ message: "Server error" });
        return res.json(result);
    });
};

// Get student by ID
export const getStudentById = (req, res) => {
    const sql = "SELECT * FROM student WHERE id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ message: "Server error" });
        if (result.length === 0) return res.status(404).json({ message: "Student not found" });
        return res.json(result[0]);
    });
};

// Create student
export const createStudent = (req, res) => {
    const { name, age, gender, email } = req.body;
    const sql = "INSERT INTO student(name, age, gender, email) VALUES (?)";
    db.query(sql, [[name, age, gender, email]], (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        return res.json({ message: "Student created", result });
    });
};

// Update student
export const updateStudent = (req, res) => {
    const { name, age, gender, email } = req.body;
    const sql = "UPDATE student SET name = ?, age = ?, gender = ?, email = ? WHERE id = ?";
    db.query(sql, [name, age, gender, email, req.params.id], (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        return res.json({ message: "Student updated", result });
    });
};

// Delete student
export const deleteStudent = (req, res) => {
    const sql = "DELETE FROM student WHERE id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: "Student not found" });
        return res.json({ message: "Student deleted" });
    });
};
