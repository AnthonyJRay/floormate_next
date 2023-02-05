import { getSession } from "next-auth/react";
import { getUser } from "@/api/user";

import Link from "next/Link";

export default function Homepage({}) {
  return (
    <div className={"w-full m-2 text-center text-gray-700"}>
      <h1 className={"text-center"}>Dashboard</h1>
      <h3>
        To get started, create your first Estimate and Invoice it,
        {<Link href="/estimates/new-estimate">here!</Link>}
      </h3>
    </div>
  );
}

export async function getServerSideProps(context) {
  const sessionData = await getSession(context);
  if (sessionData) {
    const userData = await getUser(sessionData);
    console.log("user data from mongo", userData);
    return {
      props: {
        userID: JSON.parse(JSON.stringify(userData._id)),
      },
      redirect: {
        destination: `/${userData._id}`,
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
