import { Router } from "express";
import {
  createTrip,
  deleteTripsById,
  getTrips,
  updateTripById,
} from "../controllers/tripControllers.js";

const tripsRouters = Router();

tripsRouters.get("/", getTrips);
tripsRouters.delete("/:idTrip", deleteTripsById);
tripsRouters.post("/", createTrip);
tripsRouters.put("/:idTrip", updateTripById);

export default tripsRouters;
