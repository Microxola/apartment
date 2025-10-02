import express from "express"
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/mongoDB.js"  
import connectCloudinary from "./config/cloundinary.js"  
import userRouter from "./routes/userRoutes.js";
import hotelRoutes from "./routes/hotelRoutes.js";
import roomRoutes from "./routes/roomroutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";



// config
const app = express()
// where i specified the particular port i want
const port = process.env.PORT || 4000

 
// middleware configuration
app.use(express.json());
app.use(cors());

// connect to database
connectDB(); 
// this is cloudinary called, the image gallery that was setup to manage the image
connectCloudinary();

// api routes connection
app.use("/api/user", userRouter);
app.use("/api/hotels", hotelRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/booking", bookingRoutes); 



// first routes i use to test my backend api to know whether it is working or not
app.get("/",(req, res)=>{
    res.send("Api is working perfectly now thanks to God ooo alright sha")
})

// this is the routes that listen to my port and specified whether the port i render on server works or not
app.listen(port,()=>{
    console.log(`working now http:locahost:${port}`)
})