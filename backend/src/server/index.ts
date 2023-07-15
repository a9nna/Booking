import express from "express";
import morgan from "morgan";
import cors from "cors";
import options from "./cors";

const app = express();

app.disable("x-powered-by");
app.use(morgan("dev"));
app.use(cors(options));


export default app;
