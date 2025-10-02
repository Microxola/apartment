import express from "express";
import { checkAvailabilityAPI, createBooking, getHotelBooking, getUserBooking, PayFlutterwave } from "../controller/bookingController.js";
import authUser from "../middleware/auth.js";
import adminAuth from "../middleware/adminAuth.js";


const bookingRoutes = express.Router();

bookingRoutes.post("/check-availability", checkAvailabilityAPI);
bookingRoutes.post("/book", authUser, createBooking);
bookingRoutes.get("/user", authUser, getUserBooking);  
bookingRoutes.get("/hotel", adminAuth, getHotelBooking);   
bookingRoutes.post("/pay", authUser, PayFlutterwave);         

// api for stripe payment   
// bookingRoutes.post("/stripe-payment", protect, stripePayments);


export default bookingRoutes;