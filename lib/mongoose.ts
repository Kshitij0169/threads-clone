import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true); //to prevent unknown field queries

  if (!process.env.MONGODB_URL) return console.log("MongoDB url not found");
  if (isConnected) return console.log("Already connected to mongoDB");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
