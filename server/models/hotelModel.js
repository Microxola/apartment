import mongoose from "mongoose";


const hotelSChema = new mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    contact: {type: String, required: true},
    city: {type: String, required: true},          
}, {timestamps: true});
 
const Hotel = mongoose.models.Hotel || mongoose.model("Hotel", hotelSChema);
 
export default Hotel;