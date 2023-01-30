import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log("This is the data from the request body", data);
    // const { title, amount, date } = data;

    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();

    const expensesCollection = db.collection("expenses");

    const result = await expensesCollection.insertOne(data);

    console.log("This is the result from inserting into MongoDB", result);

    client.close();

    res.status(201).json({ message: "Expense inserted!" });
  }
}
