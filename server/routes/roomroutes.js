import express from "express";
import { createRoom, getRoom, getRoomOwner, toggleRoomAvailability } from "../controller/roomController.js";
import upload from "../middleware/uploadMiddleware.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";



const roomRoutes = express.Router();
//room routes
roomRoutes.post("/", upload.array("images", 4), adminAuth, createRoom);
roomRoutes.get("/", getRoom);
roomRoutes.get("/owner", adminAuth, getRoomOwner);
roomRoutes.post("/toggle-availability", adminAuth, toggleRoomAvailability);


export default roomRoutes;  