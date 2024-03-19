"use client";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "../mode-toggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ResponsiveMenu from "./responsive-menu";

const Navbar = () => {
  const path = usePathname();

  return (
    <header className=" z-10 backdrop-filter backdrop-blur-lg bg-opacity-40 border-b border-gray-200 dark:border-gray-700 sticky top-0 w-full">
      <nav className="mx-auto flex items-center justify-between w-[500px] py-2 px-6">
        <Link href={"/"}>Logo</Link>
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={"/works"}
            className={cn(
              "p-[5px] rounded-lg transition-all hover:underline",
              path === "/works" &&
                "bg-indigo-300 dark:bg-indigo-800 hover:rounded-md"
            )}
          >
            Works
          </Link>
          <Link
            href={"/posts"}
            className={cn(
              "p-[5px] rounded-lg transition-all hover:underline",
              path === "/posts" &&
                "bg-indigo-300 dark:bg-indigo-800 hover:rounded-md"
            )}
          >
            Posts
          </Link>
          <Link
            href={"https://github.com/Kei-K23"}
            className={cn("p-[5px] rounded-lg transition-all hover:underline")}
            target="_blank"
          >
            Source
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ResponsiveMenu path={path} />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
