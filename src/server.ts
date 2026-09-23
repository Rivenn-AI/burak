// console.log("executed");
// console.log("Hello world");
// console.log("hello mom");
// import moment from "moment";
// const currentTime = moment().format("YYYY,MM,DD");
// console.log(currentTime);
// const person: string = "riven";
// const count: number = 20;

//Architectural pattern: MVC, DI, MVP
// MVC---> Modul View Controller
//Design patter: Midleware, Decotar
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("Connection is sucsided");
    const PORT = process.env.PORT ?? 3003;
  })
  .catch((err) => console.log("Error occured", err));
// console.log("PORT", process.env.PORT);

// console.log("BIZNI LINK", process.env.MONGO_URL);
