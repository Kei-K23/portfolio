"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ResponsiveMenu from "./responsive-menu";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const path = usePathname();

  return (
    <header className=" z-[100] backdrop-filter backdrop-blur-lg bg-opacity-40 border-b border-gray-200 dark:border-gray-800 fixed top-0 w-full">
      <nav className="mx-auto max-w-4xl  w-full flex items-center justify-between py-3 px-6">
        <Link
          href={"/"}
          className=" flex items-center gap-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 bg-clip-text text-transparent text-lg font-semibold"
        >
          Arkar Min
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={"/works"}
            className={cn(
              "p-[5px] rounded-lg transition-all hover:underline",
              path === "/works" &&
                "bg-emerald-300 dark:bg-emerald-800 hover:rounded-md"
            )}
          >
            Works
          </Link>
          <Link
            href={"https://github.com/Kei-K23"}
            className={cn(
              "p-[5px] rounded-lg transition-all hover:underline flex items-center gap-2"
            )}
            target="_blank"
          >
            <Icon icon="mdi:github" className="text-[1.4rem]" /> Source
          </Link>
          <a
            href={"/Arkar Min's Resume.pdf"}
            className={cn(
              "p-[5px] rounded-lg transition-all hover:underline flex items-center gap-2"
            )}
            download
          >
            <Icon icon="mdi:download" className="text-[1.4rem]" /> Get My CV
          </a>
        </div>

        <ResponsiveMenu path={path} />
      </nav>
    </header>
  );
};

export default Navbar;
