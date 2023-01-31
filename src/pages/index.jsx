import { useSession } from "next-auth/react";

export default function Homepage({}) {
  // const session = useSession();
  // console.log(session);
  return (
    <div className={"w-full m-2 text-center text-gray-700"}>
      <h1 className={"text-center"}>Homepage</h1>
    </div>
  );
}
