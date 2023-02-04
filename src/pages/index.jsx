import { getSession } from "next-auth/react";
import { getUser } from "@/api/user";

export default function Homepage({}) {
  return (
    <div className={"w-full m-2 text-center text-gray-700"}>
      <h1 className={"text-center"}>Dashboard</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const sessionData = await getSession(context);

  if (sessionData) {
    const userData = await getUser(sessionData);
    console.log("User Data coming from API/USER", userData);
  }
  return {
    props: {
      session: await getSession(context),
    },
  };
}
