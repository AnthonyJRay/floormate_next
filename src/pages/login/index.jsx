import { useState } from "react";
import Link from "next/Link";
import NewTextField from "@/ui/form/newtextfield";
import withLabel from "@/ui/form/withLabel";
import TextButton from "@/ui/button";

const UserEmail = withLabel(NewTextField);
const UserPassword = withLabel(NewTextField);

export default function Login({}) {
  const [login, setLogin] = useState({ email: "", password: "" });

  return (
    <div className={"w-full m-2 text-gray-700 flex flex-col items-center"}>
      <h1>Login</h1>
      <div className={"bg-gray-200 flex flex-col gap-2 w-1/2 m-10 rounded p-2"}>
        <UserEmail
          type="text"
          name={"email"}
          placeholder={"User Email"}
          value={login.email}
          onChange={(e) => {
            setLogin((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
        >
          Email
        </UserEmail>

        <UserPassword
          type="text"
          name={"password"}
          placeholder={"User Password"}
          value={login.password}
          onChange={(e) => {
            setLogin((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
        >
          Password
        </UserPassword>
        <div className={"w-full text-left p-2"}>
          <input type="checkbox" />
          Remember Me
        </div>
        <TextButton className="bg-blue-500 hover:bg-blue-400 p-1 rounded text-white">
          Sign In
        </TextButton>
        <div className={"w-full flex justify-between text-sm italic py-2"}>
          <Link href="/login/create-account">Create Account</Link>
          <Link href="/login/reset-password">Reset Password</Link>
        </div>
      </div>
    </div>
  );
}
