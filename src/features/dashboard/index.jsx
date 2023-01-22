import Link from "next/Link";

import {
  HomeIcon,
  Cog6ToothIcon,
  DocumentChartBarIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

import { TextButton, IconButton } from "@/ui/button";

export default function Dashboard({ children }) {
  return (
    <>
      <div className={"flex justify-between m-2 border-b-2 h-20 items-center"}>
        <Link href={"/"}>
          <h1 className={"cursor-pointer"}>
            Floor<span className={"border-4 m-1"}>Mate</span>
          </h1>
        </Link>
        <Link href="/settings">
          <div>
            <IconButton>
              <Cog6ToothIcon className={"w-8 text-gray-700"} />
            </IconButton>
          </div>
        </Link>
      </div>
      <div className={"flex"}>
        <ul className={"flex flex-col w-1/4 items-center gap-2"}>
          <Link href="/">
            <li>
              <TextButton className={"flex bg-blue-400 items-center"}>
                <HomeIcon className={"w-8"} />
                Dashboard
              </TextButton>
            </li>
          </Link>
          <Link href="/estimates">
            <li>
              <TextButton className={"flex bg-blue-400 items-center"}>
                <DocumentChartBarIcon className={"w-8"} />
                Estimates
              </TextButton>
            </li>
          </Link>
          <Link href="/expenses">
            <li>
              <TextButton className={"flex bg-blue-400 items-center"}>
                <ArrowTrendingDownIcon className={"w-8"} />
                Expenses
              </TextButton>
            </li>
          </Link>
        </ul>
        {children}
      </div>
    </>
  );
}