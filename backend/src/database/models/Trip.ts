import { Schema, model } from "mongoose";

const tripSchema = new Schema({
  status: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  deletedAt: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const Trip = model("Trip", tripSchema, "Destinations")

export default Trip;
