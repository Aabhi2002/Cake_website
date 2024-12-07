import mongoose from "mongoose";
import 'dotenv/config';
 export const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("MongoDB Connected");
    })
}