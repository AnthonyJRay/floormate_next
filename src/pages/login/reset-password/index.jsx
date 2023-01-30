import { useState } from "react";
import Link from "next/Link";
import NewTextField from "@/ui/form/newtextfield";
import withLabel from "@/ui/form/withLabel";
import TextButton from "@/ui/button";

export default function ResetPassword({}) {
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const UserPassword = withLabel(NewTextField);
  return (
    <div className={"w-full m-2 text-gray-700 flex flex-col items-center"}>
      <h1>Reset Password</h1>
      <div className={"bg-gray-200 flex flex-col gap-2 w-1/2 m-10 rounded p-2"}>
        <UserPassword
          type="text"
          name={"email"}
          placeholder={"User Email"}
          value={password.old}
          onChange={(e) => {
            setPassword((prev) => ({
              ...prev,
              oldPassword: e.target.value,
            }));
          }}
        >
          Old Password
        </UserPassword>

        <UserPassword
          type="text"
          name={"password"}
          placeholder={"User Password"}
          value={password.new}
          onChange={(e) => {
            setPassword((prev) => ({
              ...prev,
              newPassword: e.target.value,
            }));
          }}
        >
          New Password
        </UserPassword>

        <UserPassword
          type="text"
          name={"password"}
          placeholder={"User Password"}
          value={password.new}
          onChange={(e) => {
            setPassword((prev) => ({
              ...prev,
              newPassword: e.target.value,
            }));
          }}
        >
          Confirm New Password
        </UserPassword>

        <TextButton className="bg-green-500 hover:bg-green-600 p-1 rounded text-white">
          Confirm
        </TextButton>
        <div className={"w-full text-sm italic py-2"}>
          <Link href={"/login"}>Return to Login Page</Link>
        </div>
      </div>
    </div>
  );
}
