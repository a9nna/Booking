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
