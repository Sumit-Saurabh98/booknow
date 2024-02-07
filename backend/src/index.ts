import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users"
import authRoutes from "./routes/auth"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

const PORT = process.env.PORT || 5000;



const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Replace with the actual origin of your frontend
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow credentials
  optionsSuccessStatus: 204, // No content status for preflight requests
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

