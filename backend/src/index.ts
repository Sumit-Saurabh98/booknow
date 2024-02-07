import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users"
import authRoutes from "./routes/auth"
import cookieParser from "cookie-parser"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

const PORT = process.env.PORT || 5000;



const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};

app.use(cookieParser())
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

