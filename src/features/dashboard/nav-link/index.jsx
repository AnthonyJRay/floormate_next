import Link from "next/Link";

import { TextButton } from "@/ui/button";

export default function NavLink({ link, children, className, onClick }) {
  const defaultClasses = "flex gap-2 w-full bg-indigo-500 items-center py-2";
  return (
    <Link href={`${link}`}>
      <div className={"w-full"}>
        <TextButton
          className={`${defaultClasses} ${className}`}
          onClick={onClick}
        >
          {children}
        </TextButton>
      </div>
    </Link>
  );
}
