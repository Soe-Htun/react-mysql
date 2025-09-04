import express from 'express';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes.js';
import authRoutes from './routes/authRoutes.js';
import dotenv from "dotenv";


const app = express();

dotenv.config();

app.use(cors({
  credentials: true // if you plan to use cookies
}));

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port 3000');
})

app.use('/', studentRoutes);
app.use('/auth', authRoutes);

export default app;
