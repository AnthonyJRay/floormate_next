import dbConnect from "../../../../lib/dbConnect";
import ExpenseModel from "../../../../models/Expense";

export default async function handler(req, res) {
  const { body } = req;
  const reqBody = JSON.parse(body);
  console.log("Is this an object?", typeof reqBody);
  await dbConnect();

  try {
    const expense = await ExpenseModel.create(req.body);
    res.status(201).json({ success: true, data: expense });
  } catch (error) {
    console.log(error);
  }
  console.log("End Point Hit!");
  console.log("req.body", req.body);
  console.log("Is this body really empty????", req.body);
}
