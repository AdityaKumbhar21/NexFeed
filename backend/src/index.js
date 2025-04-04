import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { dbConnection } from "./config/db.config.js";
import authRouter from "./routes/auth.route.js"
dotenv.config();
const app = express();


// setting up middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// adding api routes
app.use('/api/auth', authRouter)

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    dbConnection();
})