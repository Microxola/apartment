import express from "express";
import { GetHotel, registerHotel } from "../controller/hotelController.js";
import adminAuth from "../middleware/adminAuth.js";



const hotelRoutes = express.Router();

hotelRoutes.post("/", adminAuth, registerHotel);    
hotelRoutes.get("/hotels", GetHotel);    

   
export default hotelRoutes;