import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
  if (isConnected) {
    console.log("🔁 Using existing MongoDB connection");
    return;
  }

  if (mongoose.connections[0].readyState) {
    isConnected = true;
    console.log("🔁 Using cached MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "uniride", // change if needed
    });

    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.log("❌ MongoDB connection error:", error.message);
    throw error;
  }
};