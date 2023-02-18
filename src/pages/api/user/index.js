import clientPromise from "../../../../lib/dbConnect";

export async function getUser(sessionData) {
  const client = await clientPromise;
  const db = await client.db("floormate_db");
  const isUser = await db
    .collection("users")
    .findOne({ "user.email": sessionData.user.email });

  isUser
    ? isUser
    : await db.collection("users").insertOne({ user: sessionData.user });

  return isUser;
}
