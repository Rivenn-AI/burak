import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "session",
});
/** 1-ENTRANCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public"))); //midilware--design
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));
/** 2-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
/** 3-SESSIONS **/
app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      maxAge: 1000 * 360 * 3,
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  }),
);

/** 4-ROUTERS **/
app.use("/admin", routerAdmin); // Traditional SSR--> Server site rendering
app.use("/", router); //SPA: React

export default app;
