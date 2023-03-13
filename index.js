import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
 
import { authRouter } from "./routes/authRouter.js";
import { userRouter } from "./routes/userRouter.js";

const app = express();


app.use(express.json());
app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to mongoDB.🎉🎉");
  } catch (err) {
    console.log(err.message);
  }
};
connectToDB();


app.get("/", function (request, response) {
  response.send("Hello, Welcome to Rest API");
});


// All Routes
app.use("/api", authRouter);
app.use("/api", userRouter);


app.listen(PORT, () => console.log(`Server Running in Port ${PORT}`));
