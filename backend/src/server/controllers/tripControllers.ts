import { NextFunction, Request, Response } from "express";
import Trip from "../../database/models/Trip.js";
import { CustomError } from "../../CustomError/CustomError.js";

export const getTrips = async (
  req: Request,
  res: Response,
  next: NextFunction,
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
  next: NextFunction,
) => {
  const { idTrip } = req.params;

  if (!idTrip) {
    throw new CustomError(
      "Couldn't find the identifier.",
      400,
      "Couldn't find the trip selected to delete."
    )
  }

  try {
    const tripToDelete = await Trip.findByIdAndDelete({ id: idTrip}).exec();

    if (!tripToDelete) {
      throw new CustomError(
        "Couldn't delete the trip.",
        500,
        "Couldn't delete the trip selected."
      )
    }
    
    res.status(200).json({idTrip});
  } catch (error) {
    next(error);
  }
}
