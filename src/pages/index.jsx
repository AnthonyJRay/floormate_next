// import { authOptions } from "./api/auth/[...nextauth]";
// import { getServerSession } from "next-auth/next";
// import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
// import { getServerSideProps } from "./expenses";

export default function Homepage({}) {
  // const { data: session } = useSession();

  return (
    <div className={"w-full m-2 text-center text-gray-700"}>
      <h1 className={"text-center"}>Dashboard</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
