import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";
/** 1-ENTRANCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/** 2-VIEWS **/
app.set("view", path.join(__dirname, "views"));
app.set("view engine", "ejs");
/** 3-SESSIONS **/

/** 4-ROUTERS **/
app.use("/admin", routerAdmin); // Traditional SSR--> Server site rendering
app.use("/", router); //SPA: React

export default app;
