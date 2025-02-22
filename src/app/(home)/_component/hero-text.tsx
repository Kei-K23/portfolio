import { pressStart2P } from "@/app/fonts";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

const HeroText = () => {
  return (
    <div className="space-y-4">
      <h1
        className={cn(
          pressStart2P.className,
          "text-center text-2xl md:text-3xl"
        )}
      >
        Hello there 👋, I&apos;m{" "}
        <span className=" bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 bg-clip-text text-transparent font-semibold">
          Arkar Min
        </span>{" "}
        (Kei)
      </h1>
      <p
        className={cn(
          pressStart2P.className,
          "text-[10px] text-center bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 bg-clip-text text-transparent"
        )}
      >
        &ldquo;Simplicity is the ultimate sophistication&rdquo;
      </p>
      <h2
        className={cn(
          "mx-auto leading-[55px] text-center max-w-[700px] text-lg md:text-xl"
        )}
      >
        A passionate full-stack developer interested about building full-stack
        applications, exploring creative web development and strong practice of
        building high performance, reusable UI components especially with React,
        TypeScript and NextJS. Currently, I develop and deliver high quality web
        applications, CMS applications, E-commerce websites and landing websites
        for both clients and my own open-source products. Check out my latest
        projects and open-source projects at (
        <Link
          href={"https://github.com/Kei-K23"}
          target="_blank"
          className="text-emerald-500"
        >
          Github
        </Link>{" "}
        🗂️)
      </h2>
    </div>
  );
};

export default HeroText;
