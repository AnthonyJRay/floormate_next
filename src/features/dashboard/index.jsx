import Link from "next/Link";

import {
  HomeIcon,
  Cog6ToothIcon,
  DocumentChartBarIcon,
  ArrowTrendingDownIcon,
  ArrowRightOnRectangleIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";

import { IconButton } from "@/ui/button";
import NavLink from "./nav-link";

export default function Dashboard({ children }) {
  return (
    <div className={"h-[100vh]"}>
      {/* Dashboard Header */}
      <div
        className={
          "flex justify-between p-4 bg-gray-50 border-b-2 h-20 items-center fixed w-full z-10"
        }
      >
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

      {/* Dashboard Sidebar / NavLinks */}
      <div className={"flex h-[90vh]"}>
        <div
          className={
            "p-4 flex flex-col justify-between border-r fixed top-24 h-[90vh]"
          }
        >
          <div className={"flex flex-col items-center gap-4"}>
            <NavLink link="/">
              <HomeIcon className={"w-6"} />
              <div className={"hidden md:inline-block"}>Dashboard</div>
            </NavLink>
            <NavLink link="/estimates">
              <DocumentChartBarIcon className={"w-6"} />
              <div className={"hidden md:inline-block"}>Estimates</div>
            </NavLink>
            <NavLink link="/expenses">
              <ArrowTrendingDownIcon className={"w-6"} />
              <div className={"hidden md:inline-block"}>Expenses</div>
            </NavLink>
            <NavLink link="/invoices">
              <WalletIcon className={"w-6"} />
              <div className={"hidden md:inline-block"}>Invoices</div>
            </NavLink>
          </div>

          {/* Login/Log Out button */}
          <NavLink link="/login" className={"justify-center"}>
            <ArrowRightOnRectangleIcon className={"w-6"} />
            <div className={"hidden md:inline-block"}>Log In</div>
          </NavLink>
        </div>
        {/* Dashboard Body / Main Content Area */}
        {children}
      </div>
    </div>
  );
}
