// import mongoose from "mongoose";

// export const connectDB = async () => {
//   await mongoose
//     .connect(
//       "mongodb+srv://dulanjalisenarathna93:E2JUb0zfaT2FVp8D@cluster0.exkxkun.mongodb.net/reactjs-food-delivery-app"
//     )
//     .then(() => {
//       console.log("DB connected");
//     });
// };

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
