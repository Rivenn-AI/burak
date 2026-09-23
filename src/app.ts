import express from "express";
import path from "path";
import router from "./router";
/** 1-ENTRANCE **/
const app = express();
app.use(express.static(path.join()));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/** 2-VIEWS **/
app.set("view", path.join(__dirname, "views"));
app.set("view engine", "ejs");
/** 3-SESSIONS **/

/** 4-ROUTERS **/
app.use("/", router);

export default app;
