// import { getSession } from "next-auth/react";
// import clientPromise from "../../../lib/mongodb";

export default function Login() {
  return <></>;
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   const client = await clientPromise;
//   const db = await client.db("floormate_db");
//   if (session) {
//     const user = session.user;
//     const email = user.email;
//     const isUser = await db
//       .collection("users")
//       .findOne({ "user.email": email });
//     isUser ? isUser : await db.collection("users").insertOne({ user });
//     return {
//       props: {
//         session,
//         user: JSON.parse(JSON.stringify(isUser)),
//       },
//       // redirect: {
//       //   destination: "/",
//       // },
//     };
//   } else {
//     return {
//       props: {},
//     };
//   }
// }
