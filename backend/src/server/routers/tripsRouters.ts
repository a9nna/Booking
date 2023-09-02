import { Router } from "express";
import {
  createTrip,
  deleteTripsById,
  getTrips,
  updateTripById,
} from "../controllers/tripControllers.js";

const tripsRouters = Router();

tripsRouters.get("/", getTrips);
tripsRouters.delete("/delete/:idTrip", deleteTripsById);
tripsRouters.post("/create", createTrip);
tripsRouters.put("/update/:idTrip", updateTripById);

export default tripsRouters;
