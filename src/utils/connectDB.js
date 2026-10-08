import mongoose from "mongoose";

const connectionDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  mongoose.set("strictQuery", false);

  await mongoose.connect(process.env.MONGO_URI);

  console.log("connected to DB");
};

const connectDB = async () => {
  try {
    await connectionDB();
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connectDB;