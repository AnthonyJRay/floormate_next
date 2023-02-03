// import { getSession } from "next-auth/react";
// import clientPromise from "../../../lib/mongodb";

export default function Login({ session }) {
  return <></>;
  // if (session) {
  //   return (
  //     <div>
  //       <p>Welcome back, {session.user.name}</p>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <p>You are not signed in.</p>
  //     </div>
  //   );
  // }
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
//     // console.log("Is this a user", isUser);
//     isUser ? isUser : await db.collection("users").insertOne({ user });
//     return {
//       props: {
//         session,
//         user: JSON.parse(JSON.stringify(isUser)),
//       },
//       redirect: {
//         destination: "/",
//       },
//     };
//   } else {
//     return {
//       props: {},
//     };
//   }
// }
