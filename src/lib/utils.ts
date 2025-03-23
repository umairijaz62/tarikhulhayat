import mongoose from "mongoose";

export function generateSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}

export function cn(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}


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
