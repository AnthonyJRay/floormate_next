import { useSession } from "next-auth/react";

export default function Login({}) {
  const { data: session } = useSession();

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
