//Architectural pattern: MVC, DI, MVP
// MVC---> Modul View Controller
//Design patter: Midleware, Decotar
import dotenv from "dotenv";
dotenv.config();
console.log("MONGO_URL:", process.env.MONGO_URL);
import mongoose from "mongoose";
mongoose.set("strictQuery", true);

import app from "./app";
mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("Connection is succsided");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.log(`The server working  succseded on port:${PORT}`);
      console.log(`Admin project on hhtp://localhost:${PORT}/admin \n`);
    });
  })
  .catch((err) => console.log("Error occured", err));
// console.log("PORT", process.env.PORT);
// console.log("BIZNI LINK", process.env.MONGO_URL);
