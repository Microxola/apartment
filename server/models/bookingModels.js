import mongoose from "mongoose";


const bookingSChema = new mongoose.Schema({ 
    user: {type: String, ref: "user", required: true},
    room: {type: String, ref: "Room", required: true}, 
    name: {type: String, required: true}, 
    hotel: {type: String, ref: "Hotel", required: true},   
    totalPrice: {type: Number, required: true},
    status: {    
        type: String,     
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending',
    },
    paymentMethod: {type: String, required: true, default: "Pay at hotel"},
    isPaid: {type: Boolean, default: false},
    transaction_id: {type: String},

}, {timestamps: true}); 

const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSChema);

export default Booking;