import Hotel from "../models/hotelModel.js";
import {v2 as cloudinary} from "cloudinary"
import Room from "../models/roomModel.js";
import { json } from "express";
import { populate } from "dotenv";  


// api to create a new room 
export const createRoom = async (req, res) => {
    try {
        const {roomType, pricePerNight, amenities, State, hotels, name, description, Furnishing, address, Bedroom, Bathroom, Kitchen, plot, Garage, nearby, Type} = req.body;


        // getting each of the user input now
        if(!hotels) return res.json({success: false, message: "no Hotel Found"})

        // images upload clodinary
        const uploadImages = req.files.map(async(file) => {
            const response = await cloudinary.uploader.upload(file.path);
            return response.secure_url;
        })
 
        // waiting for image to upload
        const image = await Promise.all(uploadImages);

        await Room.create({
            hotel: hotels, 
            roomType,
            Type,
            pricePerNight: +pricePerNight,
            amenities: JSON.parse(amenities),
            nearby: JSON.parse(nearby),
            image,
            name,
            State,
            description,
            Garage,
            address,
            Bedroom,
            Bathroom,
            Kitchen,
            plot,
            Furnishing
        })

        res.json({success: true, message: "Property has been created successfully"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}
// api to get room
export const getRoom = async (req, res) => {
            try {
                // const rooms = await Room.find({isAvailable: true}).populate('hotel').sort({createdAt: -1})
                // const rooms = await Room.find({ isAvailable: true }).sort({ createdAt: -1 });
                   const rooms = await Room.find().populate('hotel').sort({ createdAt: -1 });
                    // console.log(rooms);
                    
                res.json({success: true, rooms})
            } catch (error) {
                    console.log(error);
                    res.json({success: false, message: error.message});
            }
}
// api to get owner
export const getRoomOwner = async (req, res) => {
        try {
            // const hotelData = await Hotel.findOne({owner: req.auth.userId});
            const rooms = await Room.find({}).populate('hotel');
            res.json({success: true, rooms})
            // console.log(rooms);
            
            } catch (error) {
                    console.log(error);
                    res.json({success: false, message: error.message});
            }
}
// api to get and toggle room availability
export const toggleRoomAvailability = async (req, res) => {
    try {
        const {roomId } = req.body;

        const rommData = await Room.findById(roomId);
        rommData.isAvailable = !rommData.isAvailable;
        await rommData.save();

        res.json({success: true, message: "Room is successfully updated"});
    } catch (error) {
         console.log(error);
                    res.json({success: false, message: error.message});
    }

}