import { useState } from "react";
import Link from "next/Link";
import NewTextField from "@/ui/form/newtextfield";
import withLabel from "@/ui/form/withlabel";
import TextButton from "@/ui/button";

const Email = withLabel(NewTextField);
const Password = withLabel(NewTextField);

const defaultCredentials = {
  email: "",
  password: "",
};

export default function CreateAccount({}) {
  const [credentials, setCredentials] = useState(defaultCredentials);
  const [verifyPassword, setVerifyPassword] = useState("");

  async function signUpHandler(userData) {
    const response = await fetch("../api/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log("Console log from the signUpHandler", data);
    setCredentials(defaultCredentials);
  }

  return (
    <div className={"w-3/4"}>
      <h1>Sign Up</h1>
      <form
        className={"flex flex-col gap-8"}
        onSubmit={() => signUpHandler(credentials)}
      >
        <div>
          <Email
            value={credentials.email}
            onChange={(e) =>
              setCredentials((prev) => ({ ...prev, email: e.target.value }))
            }
          >
            Email
          </Email>
          <Password
            value={credentials.password}
            onChange={(e) =>
              setCredentials((prev) => ({ ...prev, password: e.target.value }))
            }
          >
            Password
          </Password>
          {/* <Password
            value={verifyPassword}
            onChange={(e) => setVerifyPassword(e.target.value)}
          >
            Confirm Password
          </Password> */}
        </div>
        <TextButton
          type={"submit"}
          className={
            "w-full bg-green-500 hover:bg-green-400 text-white p-1 rounded"
          }
        >
          Submit
        </TextButton>
      </form>
    </div>
  );
}
