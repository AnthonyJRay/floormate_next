// import dbConnect from "@/lib/dbConnect";
// import Expense from "@/models/Expense";

import dbConnect from "../../../../lib/dbConnect";
import ExpenseModel from "../../../../models/Expense";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        console.log("req.body", req.body);
      } catch (error) {}
      break;

    case "GET":
      try {
        const expense = await ExpenseModel.findById(id);
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
        // const expense = await ExpenseModel.find({}).exists({ id });

        // const expense = await ExpenseModel.find({});
        // const expense = await ExpenseModel.findByIdAndUpdate(id, req.body, {
        //   new: true,
        //   runValidators: true,
        // });

        const expense = await ExpenseModel.findByIdAndUpdate(
          id,
          { name: "test" },
          {
            new: true,
          }
        );

        // console.log("Expense in the PUT call", expense);
        if (!expense) {
          return res
            .status(400)
            .json({ success: false, data: "No expense found" });
        }
        console.log("Is this expense working", expense);
        res.status(200).json({ success: true, data: expense });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const deletedExpense = await ExpenseModel.deleteOne({ _id: id });
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
