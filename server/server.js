import express from 'express';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', studentRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;


// import express from 'express';
// import mysql from 'mysql2';
// import cors from 'cors';

// const app = express();
// app.use(cors());
// app.use(express.json());

// // DB config
// const db= mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: 'react_sql'
// })

// db.connect(err => {
//     if(err) {
//         console.error("Database connection failed:", err.stack);
//         return;
//     }
//     console.log('Connected to Mysql database');
// })

// // Get all students
// app.get('/students',(req, res) => {
//     const sql = "SELECT * FROM student";
//     db.query(sql, (err, result) => {
//         if(err) return res.json({ Message: "Error inside server" });
//         return res.json(result)
//     })
// })

// // Create student
// app.post('/student', (req, res) => {
//     const sql = "INSERT INTO student(name, age, gender, email) VALUES (?) "
//     const { name, age, gender, email } = req.body;
//     const values = [ name, age, gender, email ]
//     db.query(sql, [values], (err, result) => {
//         if(err) return res.json(err);

//         return res.json({ message: "Student updated successfully", result })
//     })
// })

// // get student by ID
// app.get('/read/:id', (req, res) => {
//     const sql = "SELECT * FROM student WHERE id = ?";
//     const id = req.params.id;
//     db.query(sql, [id], (err, result) => {
//         if(err) return res.json({ Message: "Error inside server"});
//         if (result.length > 0) {
//             return res.json(result[0]); // return object instead of array
//         } else {
//             return res.status(404).json({ Message: "Student not found" });
//         }
//     })
// })

// // Update student
// app.put('/student/:id', (req, res) => {
//     const id = req.params.id;
//     const { name, age, gender, email } = req.body;
//     const sql = "UPDATE student SET name = ?, age= ?, gender= ?, email= ? WHERE id = ?";
//     const values = [ name, age, gender, email, id ]
//     db.query(sql, values, (err, result) => {
//         if(err) return res.json(err);

//         return res.json({message: "Student updated successfully", result})
//     })
// })

// app.delete('/students/:id', (req, res) => {
//     const id = req.params.id;
//     const sql = "DELETE FROM student WHERE id= ?";
//     db.query(sql, [id], (err, result) => {
//        if (err) return res.status(500).json({ Message: "Error inside server" });
//         if (result.affectedRows === 0) return res.status(404).json({ Message: "Student not found" });
//         return res.json({ Message: "Student deleted successfully" });
//     })
// })

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// })