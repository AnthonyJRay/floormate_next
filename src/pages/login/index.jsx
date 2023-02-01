import { getSession } from "next-auth/react";
import clientPromise from "../../../lib/mongodb";

export default function Login({ session }) {
  // const { data: session } = useSession();
  // return <h1>hello</h1>;
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
  const email = session.user.email;
  // const email = "test@example.com";
  const client = await clientPromise;
  const db = await client.db("floormate_db");
  const user = await db.collection("users").findOne({ email });
  if (session) {
    return user
      ? {
          props: { user: JSON.parse(JSON.stringify(user)), session },
        }
      : {
          props: {
            user: JSON.parse(
              JSON.stringify(await db.collection("users").insertOne({ email }))
            ),
            session,
          },
        };
  }
}
// if (user) {
//   console.log("User already exists");
//   return user;
// } else {
//   const newUser = await db.collection("users").insertOne({ email });
//   console.log("New User inserted!", newUser);
//   return newUser;
// }
// const data = await db.collection("users").insertOne({ email });
// return {
//   props: { session },
//   // redirect: {
//   //   destination: "/",
//   // },
// };
