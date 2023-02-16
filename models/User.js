import mongoose from "mongoose";
import { Estimate } from "./Estimate.js";
import { Expense } from "./Expense.js";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    maxlength: [20, "First name cannot be more than 20 characters"],
  },
  lastName: {
    type: String,
    maxlength: [20, "First name cannot be more than 20 characters"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [],
  },
  image_url: {
    type: String,
  },
  estimates: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Estimate,
    },
  ],
  expenses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Expense,
    },
  ],
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
