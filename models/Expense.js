import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  expenseDate: {
    type: String,
    required: [true, "Please add an expense date"],
  },
  expenseName: {
    type: String,
    required: [true, "Please add an expense name"],
  },
  expensePurpose: {
    type: String,
    required: [true, "Please add an expense purpose"],
  },
  expenseAmount: {
    type: Number,
    required: [true, "Please add an expense amount"],
  },
});

export default mongoose.models.Expense ||
  mongoose.model("Expense", ExpenseSchema);
