
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
 
const app = express();
dotenv.config();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', authRoutes);

// app.get("/api", (req, res) => {
//     res.send("Akshat Shrivastava");
// });

const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.MONGO_URI, {}).then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

console.log("Connecting to:", process.env.MONGO_URI); 