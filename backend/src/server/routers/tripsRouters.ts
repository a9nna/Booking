import { Router } from "express";
import { deleteTripsById, getTrips } from "../controllers/tripControllers.js";

const tripsRouters = Router()

tripsRouters.get("/",getTrips);
tripsRouters.delete("/delete/:idTrip", deleteTripsById);

export default tripsRouters;
