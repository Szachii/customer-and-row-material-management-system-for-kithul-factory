import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js'
import mongoose from 'mongoose'

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('database connected'))
.catch((err) => console.log('database not connected',err))

app.use(express.json())

app.use('/', authRoutes)

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server is running on port ${port}`))