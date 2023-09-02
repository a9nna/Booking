import { NextFunction, Request, Response } from "express";
import Trip from "../../database/models/Trip.js";
import { CustomError } from "../../CustomError/CustomError.js";
import { Trip as TripStructure } from "../types.js";

export const getTrips = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const trips = await Trip.find().exec();

    if (!trips) {
      throw new CustomError(
        "Couldn't retrieve matches.",
        500,
        "Couldn't retrieve matches.",
      );
    }

    res.status(200).json({ trips });
  } catch (error) {
    next(error);
  }
};

export const deleteTripsById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { idTrip } = req.params;

  try {
    const tripToDelete = await Trip.findByIdAndDelete({ _id: idTrip }).exec();

    if (!tripToDelete) {
      throw new CustomError(
        "Couldn't delete the trip.",
        500,
        "Couldn't delete the trip selected.",
      );
    }

    res.status(204).json({ idTrip });
  } catch (error) {
    next(error);
  }
};

export const createTrip = async (
  req: Request<
    Record<string, unknown>, 
    Record<string, unknown>, 
    TripStructure
  >,
  res: Response,
  next: NextFunction
) => {
  try {
    const newTrip = req.body;

    const tripToCreate = await Trip.create({ newTrip });

    if (!tripToCreate) {
      throw new CustomError(
        "Couldn't create the trip.",
        500,
        "Couldn't create the trip."
      )
    }

    res.status(201).json({ newTrip });
  } catch (error) {
    next(error);
  }
};

export const updateTripById = async (
  req: Request<
    Record<string, unknown>,
    Record<string,unknown>,
    TripStructure
  >,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idTrip } = req.params
    const { createdAt, deletedAt, description } = req.body;
  
    const updatedTrip = await Trip.findByIdAndUpdate(
      {
        _id: idTrip
      },
      {
        createdAt,
        deletedAt,
        description
      }
    );
  
    if (!updatedTrip) {
      throw new CustomError(
        "Couldn't update the trip.",
        500,
        "Couldn't update the trip."
      )
    }

  res.status(204).json({ idTrip });
  } catch (error) {
    next(error)
  }
}
