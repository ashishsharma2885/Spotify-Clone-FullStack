import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected',() => {
       console.log("conection estabished");
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/spotufy`)
}

export default connectDB;