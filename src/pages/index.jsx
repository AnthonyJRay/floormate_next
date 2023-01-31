import { useSession } from "next-auth/react";

export default function Homepage({}) {
  const { data: session, status } = useSession();
  console.log(status);
  // console.log("This session exists", !session);
  return (
    <div className={"w-full m-2 text-center text-gray-700"}>
      <h1 className={"text-center"}>Homepage</h1>
      {status === "authenticated" ? (
        <p>Welcome back, {session.user.name}</p>
      ) : (
        <p>Please log in first.</p>
      )}
    </div>
  );
}
