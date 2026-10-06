import mongoose from "mongoose";
import { NextResponse } from "next/server";

const connectionDB = async () => {
  if (mongoose.connections[0].readyState) return;
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGO_URI);
  console.log("connected to DB");
};

const connectDB = async () => {
  try {
    await connectionDB();
  } catch (error) {
    console.log(error);
    NextResponse.json(
      { message: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
};

export default connectDB;
