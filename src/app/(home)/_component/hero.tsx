"use client";
import { BackgroundBeams } from "@/components/aceternity/background-beam";
import React from "react";
import HeroText from "./hero-text";

export function Hero() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl mx-auto p-4 mt-48">
        <HeroText />
      </div>
      <BackgroundBeams />
    </div>
  );
}
