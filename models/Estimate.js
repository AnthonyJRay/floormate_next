import mongoose from "mongoose";
import { LineItem } from "./LineItem.js";

const EstimateSchema = new mongoose.Schema({
  estimateDate: {
    type: Date,
    default: Date.now,
  },
  estimateNumber: {
    type: String,
    required: [true, "Please add an estimate number"],
    unique: true,
  },
  client: {
    firstName: {
      type: String,
      maxlength: [20, "First name cannot be more than 20 characters"],
      required: [true, "Please add a first name"],
    },
    lastName: {
      type: String,
      maxlength: [20, "First name cannot be more than 20 characters"],
      required: [true, "Please add a first name"],
    },
    address: {
      street: {
        type: String,
        required: [true, "Please add a street address"],
      },
      city: {
        type: String,
        required: [true, "Please add a city"],
      },
      state: {
        type: String,
        required: [true, "Please add a state"],
      },
      zip: {
        type: String,
        required: [true, "Please add a zip code"],
      },
    },
    phone: {
      type: String,
      required: [true, "Please add a phone number"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
    },
  },
  summary: {
    type: String,
    required: [true, "Please add a scope of work"],
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: LineItem,
    },
  ],
  notes: {
    type: String,
  },
  subtotal: {
    type: Number,
  },
  tax: {
    type: Number,
  },
  total: {
    type: Number,
  },
});

export default mongoose.models.Estimate ||
  mongoose.model("Estimate", EstimateSchema);
