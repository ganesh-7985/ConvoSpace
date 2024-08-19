import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
   const connection = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB}`)
   if(connection){
    console.log("Connected to MongoDB")
   }  
   else{
    console.log("Failed to connect to MongoDB")
   }    
}

export default connectDB;
