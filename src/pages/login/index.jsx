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

  // const email = "test@example.com";

  if (session) {
    const client = await clientPromise;
    const db = await client.db("floormate_db");
    const email = session.user.email;
    const user = session.user;
    const isUser = await db.collection("users").findOne({ email });
    return user
      ? {
          props: { user: JSON.parse(JSON.stringify(isUser)), session },
          // redirect: {
          //   destination: "/",
          // },
        }
      : {
          props: {
            user: JSON.parse(
              JSON.stringify(await db.collection("users").insertOne({ user }))
            ),
            session,
          },
          // redirect: {
          //   destination: "/",
          // },
        };
  } else {
    return {
      props: {},
      // redirect: {
      //   destination: "/",
      // },
    };
  }
}
