import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <>
      <div>
        Log in, <span onClick={() => signIn()}>here</span>
      </div>
    </>
  );
}
