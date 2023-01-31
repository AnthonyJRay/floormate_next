import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log("This is the data from the request body", data);
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();

    const pendingUsers = db.collection("pending-users");

    const result = await pendingUsers.insertOne(data);

    console.log("This is the result from inserting into MongoDB", result);

    client.close();

    res.status(201).json({ message: "Pending User inserted!" });
  }
}
