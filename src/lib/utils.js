import mongoose from "mongoose";

let connection = {};

export const connectToDb = async () => {
  if (connection.isConnected) return;

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log("✅ Connected to MongoDB:", db.connections[0].name);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }
};