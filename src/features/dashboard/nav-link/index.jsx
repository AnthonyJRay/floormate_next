import Link from "next/Link";

import { TextButton } from "@/ui/button";

export default function NavLink({ link, children }) {
  const defaultClasses = "flex gap-2 w-full bg-indigo-500 items-center py-3";
  return (
    <Link href={`${link}`}>
      <div className={"w-full"}>
        <TextButton className={`${defaultClasses}`}>{children}</TextButton>
      </div>
    </Link>
  );
}
