import Link from "next/Link";
import { TextButton } from "@/ui/button";

export default function Homepage({}) {
  return (
    <div>
      <div>
        <ul className={"flex flex-col gap-2"}>
          <Link href="/estimates">
            <li>
              <TextButton className={"bg-blue-400"}>Estimates</TextButton>
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <h1 className={"text-center"}>Homepage</h1>
      </div>
    </div>
  );
}
