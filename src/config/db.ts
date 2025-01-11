import mongoose from "mongoose";


export default async function connectDB() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}