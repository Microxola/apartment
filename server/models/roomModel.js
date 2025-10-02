import mongoose, { Schema } from "mongoose";
 

const roomSChema = new mongoose.Schema({
    // hotel: {type: String, ref: "Hotel", required: true},
     hotel: { type: Schema.Types.ObjectId, ref: "Hotel", required: true },
    roomType: {type: String, required: true},
    Type: {type: String, required: true},
    pricePerNight: {type: Number, required: true},
    amenities: {type: Array, required: true},
    nearby: {type: Array, required: true},
    image: [{type: String, required: true,}],
    State: [{type: String, required: true,}],
    name: [{type: String, required: true,}],
    description: [{type: String, required: true,}],
    Garage: [{type: Number, required: true,}],
    address: [{type: String, required: true,}],
    Bedroom: [{type: Number, required: true,}],
    Bathroom: [{type: Number, required: true,}],
    Kitchen: [{type: Number, required: true,}],
    plot: [{type: String, required: true,}],
    Furnishing: [{type: String, required: true,}],
    isAvailable: {type: Boolean, default: true,},
}, {timestamps: true}); 

const Room = mongoose.models.Room || mongoose.model("Room", roomSChema);

export default Room;