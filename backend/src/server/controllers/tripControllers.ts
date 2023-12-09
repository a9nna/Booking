import { NextFunction, Request, Response } from "express";
import Trip from "../../database/models/Trip.js";
import { Trip as TripStructure } from "../types.js";

export const getTrips = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const trips = await Trip.find().exec();

    res.status(200).json({ trips });
  } catch (error) {
    next(error);
  }
};

export const deleteTripsById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { idTrip } = req.params;
  try {
    const tripToDelete = await Trip.findByIdAndDelete(idTrip);

    res.status(204).json({ idTrip });
  } catch (error) {
    next(error);
  }
};

export const createTrip = async (
  req: Request<Record<string, unknown>, Record<string, unknown>, TripStructure>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const newTrip = req.body;
    const createdTrip = await Trip.create(newTrip);

    res.status(201).json(createdTrip);
  } catch (error) {
    next(error);
  }
};

export const updateTripById = async (
  req: Request<Record<string, unknown>, Record<string, unknown>, TripStructure>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { idTrip } = req.params;
    const { createdAt, deletedAt, description } = req.body;

    const updatedTrip = await Trip.findByIdAndUpdate(
      {
        _id: idTrip,
      },
      {
        createdAt,
        deletedAt,
        description,
      },
    );

    res.status(204).json({ idTrip });
  } catch (error) {
    next(error);
  }
};
