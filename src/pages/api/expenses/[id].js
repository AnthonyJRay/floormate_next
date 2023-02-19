// import dbConnect from "@/lib/dbConnect";
// import Expense from "@/models/Expense";

import dbConnect from "../../../../lib/dbConnect";
import Expense from "../../../../models/Expense";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const expense = await Expense.findById(id);
        if (!expense) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: expense });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        console.log("req.body", req.body);
        console.log("id", id);
        const expense = await Expense.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!expense) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: expense });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const deletedExpense = await Expense.deleteOne({ _id: id });
        if (!deletedExpense) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
}
