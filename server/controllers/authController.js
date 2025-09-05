import db from '../db/index.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

// register 
export const register = (req, res) => {
    const { username, email, password } = req.body;
    const sql = "INSERT INTO auth(username, email, password) VALUES (?)";
    const salt = 10; // 10 salt rounds
    bcrypt.hash(password.toString(), salt, (err, hash) => {
        if(err) return res.json("Error")
        const values = [username, email, hash]
        db.query(sql, [values], (err, result) => {
            if (err) return res.status(500).json({ message: err.message });
            return res.json({ message: "Register successful", result });
        });
    })
}

// Login
export const login = (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM auth WHERE email = ?";

    db.query(sql, [email], (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        if (result.length === 0) return res.status(401).json({ message: "User not found" });

        const user = result[0];

        bcrypt.compare(password.toString(), user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ message: "Error comparing password" });
            if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

            const token = jwt.sign(
                {  id: user.id, username: user.username, email: user.email },
                process.env.JWT_SECRET_KEY,
                { expiresIn: "2d" }
            )

            const userInfo = {id: user.id, username: user.username, email: user.email}; 
            return res.json({ 
                message: "Login successful",
                userInfo: userInfo,
                token
            });
        });
    });
};