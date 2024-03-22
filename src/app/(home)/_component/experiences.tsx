"use client";
import { pressStart2P } from "@/app/fonts";
import { BackgroundBeams } from "@/components/aceternity/background-beam";
import { cn } from "@/lib/utils";
import { experiences } from "@/shared/experiences";
import React from "react";

const Experiences = () => {
  return (
    <div className="my-[160px] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl mx-auto p-4">
        <h2
          className={cn(
            pressStart2P.className,
            " mb-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 bg-clip-text text-transparent text-center text-xl md:text-2xl"
          )}
        >
          Experiences
        </h2>
        <div className="space-y-8">
          {experiences.map((e, index) => (
            <div
              key={index}
              className="pb-5 border-b border-emerald-300 last:border-b-0"
            >
              <h3
                className={cn(
                  pressStart2P.className,
                  "text-base underline underline-offset-4"
                )}
              >
                {index + 1}.{e.title}({e.category})
              </h3>
              <div className="my-2 flex items-center gap-4">
                (<h4>{e.startDate}</h4>
                <span>---</span>
                <h4>{e.endDate}</h4>)
              </div>
              <p className="text-lg">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Experiences;
