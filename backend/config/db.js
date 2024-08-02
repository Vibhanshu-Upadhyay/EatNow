import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vupadhyay:gXG07v4yeNsxBqSF@cluster0.fqltn6v.mongodb.net/eatNow",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("My DB is now connected");
  } catch (err) {
    console.error("DB connection error:", err);
  }
};
