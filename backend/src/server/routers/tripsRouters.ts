import { Router } from "express";
import { getTrips } from "../controllers/tripControllers.js";

const tripsRouters = Router()

tripsRouters.get("/",getTrips);

export default tripsRouters;
