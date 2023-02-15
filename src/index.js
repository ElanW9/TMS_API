import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import singerRouter from "./routes/singerRouter.js";

//variables
const { MONGO_URL, PORT, FRONTEND_URL, NODE_ENV } = process.env;
const app = express();
const endpoint = "/api/v1/theMaskedSinger";
const corsOptions = {
  origin: FRONTEND_URL,
};

app.use(express.json());
app.use(express.static("public"));
app.use(cors(corsOptions));

app.use(endpoint, singerRouter);

const startServer = async () => {
  try {
    mongoose.set(`strictQuery`, true);
    mongoose.connect(MONGO_URL);
    app.listen(PORT, () => {
      if (NODE_ENV === "development") {
        console.log(`http://localhost:${PORT}`);
      } else {
        console.log("Server is running...");
      }
    });
  } catch (error) {
    console.error(error);
  }
};
startServer();
