import { getSession } from "next-auth/react";

export async function getData() {
  const session = getSession();
  console.log(session);
}
