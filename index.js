import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const uri = `mongodb+srv://${process.env.USERNAME_MONGODB}:${process.env.PASSWORD_MONGODB}@cluster0.rkhn2ow.mongodb.net/?retryWrites=true&w=majority`;

// setup connection mongodb
mongoose.connect(uri); // create connection db
const db = mongoose.connection; // connect to db

// handling db connection response
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected"));

// middleware
app.use(cors());
app.use(express.json());
app.use(userRoute);

app.get("/", (req, res) => res.send("Server Run..."));

app.listen(5000, () => {
  console.log("Server up and run...");
  console.log("http://localhost:5000");
});
