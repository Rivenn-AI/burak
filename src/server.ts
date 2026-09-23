//Architectural pattern: MVC, DI, MVP
// MVC---> Modul View Controller
//Design patter: Midleware, Decotar
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";
mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("Connection is sucsided");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.log(`The server working  succseded on port:${PORT}`);
    });
  })
  .catch((err) => console.log("Error occured", err));
// console.log("PORT", process.env.PORT);

// console.log("BIZNI LINK", process.env.MONGO_URL);
