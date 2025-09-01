import express from 'express';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

app.use('/', studentRoutes);

export default app;
