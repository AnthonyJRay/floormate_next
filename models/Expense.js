import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  occurredOn: {
    type: String,
    required: [true, "Please add an expense date"],
  },
  name: {
    type: String,
    required: [true, "Please add an expense name"],
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
  mongoose.model("expenses", ExpenseSchema, "expenses");
