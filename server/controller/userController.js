import userModel from "../models/userModel.js";
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// const createToken = (id) => {
//     return jwt.sign( { id }, process.env.JWT_SECRET)
// }
const createToken = (id, email) => {
    return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: '1d' }); // expires in 1 day
}
    

const userLogin = async (req, res) => { 
        try {  
            const { email, password } = req.body;

            const user = await userModel.findOne({email});
            if(!user){
                res.json({success: false, message: "email is not available in our database"});
            }

            const isMatch = await bcrypt.compare(password, user.password)
            if(isMatch){
                const token = createToken(user._id, user.email);
                // console.log(token);

                res.json({
                        success: true, 
                        token
                    });
                    
            }else{
                res.json({success: false, message:"the password is not correct"})
            }
        } catch (error) {
            console.log(error);
            res.json({success: false, message: error.message})
        }
}

const userRegister = async (req, res) => {
    // console.log("Request Body:", req.body);

        try {
            const { email, name, password } = req.body;

            const userexist = await userModel.findOne({email});
            if(userexist){
                res.json({success: false, message: "User already exist"});
            }
            if(!validator.isEmail(email)){
                res.json({success: false, message: "Use a valid email address"});
            }

            if(password.length < 8){
                return res.json({success: false, message: "password must be at least 8 character"})
            }
            const salts  = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(password, salts)

            const newUser = new userModel({
                name,
                email, 
                password: hashed
            });

            const user = await newUser.save();

            const token = createToken(user._id);
            res.json({success: true, token})
        } catch (error) {
            console.log(error);
            res.json({success: false, message: error.message})
        }
}

// admin login
const adminLogin = async (req, res) => {
    try {
        
    const {email, password} = req.body;

    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
        const token = jwt.sign(email+password, process.env.JWT_SECRET);
        res.json({success: true, token})
    }else{
        res.json({success: false, message: "Invalid Credentials"})
    }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

export {userLogin, userRegister, adminLogin}