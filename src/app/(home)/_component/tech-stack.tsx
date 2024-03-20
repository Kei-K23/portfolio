"use client";
import { pressStart2P } from "@/app/fonts";
import { BackgroundBeams } from "@/components/aceternity/background-beam";
import { cn } from "@/lib/utils";
import { techStacks } from "@/shared/tech-stacks";
import React from "react";

const TechStack = () => {
  return (
    <div className="my-[160px] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl mx-auto p-4">
        <h2
          className={cn(
            pressStart2P.className,
            "mb-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 bg-clip-text text-transparent text-center text-xl md:text-2xl"
          )}
        >
          Tech Stacks
        </h2>
        <div className="grid grid-cols-7 gap-4">
          {techStacks.map((t) => (
            <div key={t.name}>{t.icon}</div>
          ))}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default TechStack;
