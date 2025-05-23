import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoutes from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
dotenv.config({});
const app = express();



//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
const corsOption = {
    origin: 'http//localhost:5173',
    credentials: true
}
app.use(cors(corsOption));


app.use("/api/v1/user", userRoutes);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

//DB CALL
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`App is Running at ${PORT}`);
})