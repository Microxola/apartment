import Hotel from "../models/hotelModel.js";


export const registerHotel = async (req, res) => {
    try {
        // console.log(req.body);
        const {name, address, contact, city} = req.body;
    
        // checking if user already exists
        // const hotels = await Hotel.findOne({owner});

        await Hotel.create({name, address, contact, city});   

        // await User.findByIdAndUpdate(owner, {role: 'admin'});

        res.json({success: true, messsage:"hotel successfully registered"})       
    } catch (error) {
        res.json({success: false, message: error.message})        
    }
}
export const GetHotel = async (req, res) => {
    try {
       const Hotels = await Hotel.find({});

        res.json({success: true, Hotels})       
    } catch (error) {
        res.json({success: false, message: error.message})        
    }
}
