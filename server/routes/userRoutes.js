import express from "express"
import { adminLogin, userLogin, userRegister } from "../controller/userController.js";

// i defined user routes here 
const userRouter = new express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);
userRouter.post("/admin", adminLogin);

export default userRouter;