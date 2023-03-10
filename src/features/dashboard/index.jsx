import Link from "next/Link";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

import {
  HomeIcon,
  Cog6ToothIcon,
  PencilSquareIcon,
  ArrowTrendingDownIcon,
  ArrowRightOnRectangleIcon,
  WalletIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

import { IconButton } from "@/ui/button";
import NavLink from "./nav-link";

export default function Dashboard({ children, params }) {
  const { data: session } = useSession();
  // console.log("Does params contain any data?", params);
  // console.log("Session data from Dashboard", session);
  return (
    <div className={"h-[100vh] overflow-hidden"}>
      {/* Dashboard Header */}
      <div
        className={
          "flex justify-between w-full p-4 bg-gray-50 border-b-2 h-20 items-center"
        }
      >
        <Link href={"/"}>
          <h1 className={"cursor-pointer"}>
            Floor<span className={"border-4 m-1"}>Mate</span>
          </h1>
        </Link>
        <div className={"flex items-center gap-2"}>
          {session ? (
            <p>Welcome back, {session.user.name}</p>
          ) : (
            <>
              <p>Log in,</p> <Link href={"/login"}>here</Link>
            </>
          )}
          <Link href="/settings">
            <div>
              <IconButton>
                <Cog6ToothIcon className={"w-8 text-gray-700"} />
              </IconButton>
            </div>
          </Link>
        </div>
      </div>

      {/* Dashboard Sidebar / NavLinks */}
      <div className={"flex"}>
        <div className={"p-4 flex flex-col justify-between border-r h-[90vh]"}>
          <div className={"flex flex-col items-center gap-4"}>
            <NavLink link="/">
              <HomeIcon className={"w-6"} />
              <div className={"hidden md:inline-block"}>Dashboard</div>
            </NavLink>
            <NavLink link="/estimates">
              <PencilSquareIcon className={"w-6"} />
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
            <NavLink link="/tools">
              <WrenchScrewdriverIcon className={"w-6"} />
              <div className={"hidden md:inline-block"}>Tools</div>
            </NavLink>
          </div>
          {/* Login/Log Out button */}
          {!session ? (
            <NavLink className={"justify-center"} onClick={() => signIn()}>
              <ArrowRightOnRectangleIcon className={"w-6"} />
              <div className={"hidden md:inline-block"}>Log In</div>
            </NavLink>
          ) : (
            <NavLink
              link="/"
              className={"justify-center"}
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              <ArrowRightOnRectangleIcon className={"w-6"} />
              <div className={"hidden md:inline-block"}>Log Out</div>
            </NavLink>
          )}
        </div>
        {/* Dashboard Body / Main Content Area */}
        <div
          className={
            "w-full h-[90vh] overflow-y-auto m-2 text-center flex flex-col items-center text-gray-700"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}
