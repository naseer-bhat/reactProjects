import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import promptRoutes from './routes/promptRoutes.js';
import authRoutes from "./routes/authRoutes.js"

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api",authRoutes)

app.use('/api/evaluate', promptRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
