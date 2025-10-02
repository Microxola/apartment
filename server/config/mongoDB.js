import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log('DB Connected Successfully Thank God')
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/apartment`)

}

export default connectDB;