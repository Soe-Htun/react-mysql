import mysql from 'mysql2';

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: 'react_sql'
});

db.connect(err => {
    if (err) console.error("Database connection failed:", err.stack);
    else console.log("Connected to MySQL database");
});

export default db;
