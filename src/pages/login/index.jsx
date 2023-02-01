import { getSession } from "next-auth/react";
import clientPromise from "../../../lib/mongodb";

export default function Login({ session, user }) {
  // const { data: session } = useSession();
  // return <h1>hello</h1>;
  console.log(user);
  if (session) {
    return (
      <div>
        <p>Welcome back, {session.user.name}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed in.</p>
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const client = await clientPromise;
  const db = await client.db("floormate_db");
  if (session) {
    const user = session.user;
    const email = JSON.stringify(user.email);
    console.log("This is the email value", email);
    const isUser = await db.collection("users").findOne({ user: { email } });
    console.log("Does this user exist", isUser);
    // isUser ? isUser : await db.collection("users").insertOne({ user });
  }

  console.log(session);
  return {
    props: {
      session,
    },
    // redirect: {
    //   destination: "/"
    // }
  };
}
