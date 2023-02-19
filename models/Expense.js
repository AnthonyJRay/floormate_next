import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add an expense name"],
  },
  occurredOn: {
    type: String,
    required: [true, "Please add an expense date"],
  },
  purpose: {
    type: String,
    required: [true, "Please add an expense purpose"],
  },
  total: {
    type: String,
    required: [true, "Please add an expense amount"],
  },
});

export default mongoose.models.Expense ||
  mongoose.model("Expense", ExpenseSchema);
