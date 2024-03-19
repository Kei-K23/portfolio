import { pressStart2P } from "@/app/fonts";
import { cn } from "@/lib/utils";
import React from "react";

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
      <h2
        className={cn(
          "mx-auto leading-[55px] text-center max-w-[700px] text-lg md:text-xl"
        )}
      >
        A passionate full-stack developer 🧑‍💻 that interest in writing web
        applications 🕸️ and tools ⚒️ to gain better DX. I always learn some new
        things and topics. In my free time, I write dummy libraries 📚 and clone
        other applications like Twitch, Trello, Discord (You can find those
        close in my repo 🗂️).
      </h2>
    </div>
  );
};

export default HeroText;
