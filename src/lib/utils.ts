import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: "Tarikh-ul-Hayat",
    });
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.log("❌ MongoDB Connection Failed:", error);
  }
};
