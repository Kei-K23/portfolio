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
        A passionate full-stack developer 🧑‍💻 that interest in writing web
        applications 🕸️ and tools ⚒️ to gain better DX. I always learn some new
        things and topics. In my free time, I write dummy libraries 📚 and clone
        other applications like Twitch, Trello, Discord (You can find those
        clones in my{" "}
        <Link
          href={"https://github.com/Kei-K23"}
          target="_blank"
          className="text-emerald-500"
        >
          Github
        </Link>{" "}
        🗂️). My goal is to write softwares, toolings and libraries that are good
        to use and boot DX 🚀.
      </h2>
    </div>
  );
};

export default HeroText;
