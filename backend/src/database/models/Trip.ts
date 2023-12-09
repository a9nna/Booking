import { Schema, model } from "mongoose";

const tripSchema = new Schema(
  {
    status: {
      type: Boolean,
      required: true,
    },
    createdAt: {
      type: Date,
    },
    deletedAt: {
      type: Date,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Trip = model("Trip", tripSchema, "Destinations");

export default Trip;
