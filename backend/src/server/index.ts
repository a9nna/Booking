import express from "express";
import morgan from "morgan";
import cors from "cors";
import options from "./cors.js";
import tripsRouters from "./routers/tripsRouters.js";

const app = express();

app.disable("x-powered-by");
app.use(morgan("dev"));
app.use(cors(options));
app.use(express.json());

app.use("/trips", tripsRouters);

export default app;
