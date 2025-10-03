import Booking from "../models/bookingModels.js"
import User from "../models/userModel.js";
import Room from "../models/roomModel.js";
import Hotel from "../models/hotelModel.js";
import axios from "axios"




const checkAvailability = async ({checkInDate, checkOutDate, room }) => {

        try {
            const bookings = await Booking.find({
                room,
                checkInDate: {$lte: checkOutDate},
                checkOutDate: {$gte: checkInDate}
            });
            const isAvailable = bookings.length === 0;
            return isAvailable;
        } catch (error) {
            console.log(error);
            res.json({success: false, message: error.message});
        } 

}

// api to check availability of rooms 
// post /api/bookings/check-availability

export const checkAvailabilityAPI = async (req, res) => {
    try {
        const {checkInDate, checkOutDate, room } = req.body;

        const isAvailable = await checkAvailability({checkInDate, checkOutDate, room });

        res.json({success: true, isAvailable})
    } catch (error) {
          console.log(error);
            res.json({success: false, message: error.message});
    }
}



// api to check availability of rooms 
// post /api/bookings/check-availability

export const createBooking = async (req, res) => {
     
    try {  
      
        const {checkInDate, checkOutDate, room, guest } = req.body;
        const user = req.user.id;
       
        
        // before booking check availability
        const isAvailable = await checkAvailability({checkInDate, checkOutDate, room });

        if(!isAvailable){
            res.json({success: false, message: "Room is not available"})
        }
        // get total price from rooms 
        const roomData = await Room.findById(room).populate('hotel');
        let totalPrice = roomData.pricePerNight;


        // calculate totalprice based on nights
        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);
        const timeDiff = checkOut.getTime() - checkIn.getTime();

        const nights = Math.ceil(timeDiff / (1000*3600*24));
        totalPrice *= nights; 

        const booking = await Booking.create({
                user,
                room, 
                hotel: roomData.hotel._id,
                guest: +guest,
                checkInDate,
                checkOutDate,
                totalPrice,
        })
        // await booking.save();
        res.json({success: true, message: "Booking has been created successfully"});
    } catch (error) {
          console.log(error);
            res.json({success: false, message: error.message});
    }
}

export const getUserBooking = async (req, res) => {
    try {
        const userId = req.user.id; // Now coming from req.user
        
        const user = await User.findById(userId);
        const bookings = await Booking.find({ user: userId })
            .populate("room")
            .populate('hotel');
       
        res.json({ success: true, bookings });
    } catch (error) {
        // error handling
    }
}

// api to get booking for all useres
// get api/booking/user 
// export const getUserBooking = async (req, res) => {
//     try {
//         const user = req.body.userId;
//         const gmail = user.email;

//         const booking = await Booking.find({user}).populate("room").populate('hotel').sort({created_at: -1})
       
//         res.json({success: true, booking, gmail})
//     } catch (error) {
//           console.log(error);
//             res.json({success: false, message: 'failed to fetch bookings'});
//     }
// }


export const getHotelBooking = async (req, res) => { 
   try {
        const bookings = await Booking.find({isPaid: true}) .populate([
                { path: 'room', model: 'Room' },
                { path: 'hotel', model: 'Hotel' },
                { path: 'user', model: 'user' }
            ]).sort({created_at: -1})
        const totalBooking = bookings.length;
        const totalRevenue = bookings.reduce((acc, booking) => acc+booking.totalPrice, 0)
        res.json({success: true, dashboardData: {totalBooking, totalRevenue, bookings}})
   } catch (error) {
            console.log(error);
            res.json({success: false, message: 'failed to fetch dashboard data'});
   }
}



export const PayFlutterwave = async (req, res) => {
  try {
    const { propertyId, transaction_id } = req.body;
    const user = req.user.id;


    if (!transaction_id || !propertyId) {
      return res.status(400).json({ success: false, message: 'Missing booking ID or transaction ID' });
    }

    // Find the room being booked
    const room = await Room.findById(propertyId).populate('hotel');
    if (!room) {
      return res.status(404).json({ success: false, message: 'Room not found' });
    }

    // Flutterwave Verification
    const flutterwaveResponse = await axios.get(
      `https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`,
      {
        headers: {
          Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
        },
      }
    );
   

    const { status, data } = flutterwaveResponse.data;

    if (status !== "success" || data.status !== "successful") {
      return res.status(400).json({ success: false, message: 'Payment not verified or failed' });
    }

    
    // Create new booking with all required fields
    const newBooking = new Booking({
      user: user,
      room: room._id, 
      name: Array.isArray(room.name) ? room.name[0] : room.name,
      hotel: room.hotel._id, 
      totalPrice: data.amount, 
      status: 'confirmed',
      paymentMethod: "Flutterwave",
      isPaid: true,
      transaction_id: data.transaction_id
    });

    await newBooking.save();
 

    return res.status(200).json({ 
      success: true, 
      message: 'Payment verified and booking created', 
      // booking: newBooking 
    });

  } catch (err) {
    console.error(err?.response?.data || err.message);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};