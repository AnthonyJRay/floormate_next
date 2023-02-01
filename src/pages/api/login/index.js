import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("floormate_db");
    console.log(req.body);

    // const isUser = await db
    //   .collection("users")
    //   .findOut({ email: JSON.stringify(session.users) });

    // const post = await db.collection("users").insertOne({
    //   title,
    //   content,
    // });

    // res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
