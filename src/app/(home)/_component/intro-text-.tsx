import { pressStart2P } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { ArrowBigRightDashIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IntroText = () => {
  return (
    <>
      <div className="flex flex-col items-start md:flex-row md:items-start md:justify-between gap-y-4">
        <div>
          <h2 className={cn(pressStart2P.className, "text-xl md:text-2xl")}>
            Arkar Min
          </h2>
          <h3 className="bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 bg-clip-text text-transparent text-lg font-bold">
            Full stack developer
          </h3>
        </div>
        <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden">
          <Image
            fill
            src="https://avatars.githubusercontent.com/u/134714087?v=4"
            alt="Arkar Min's img"
          />
        </div>
      </div>
      <h3 className="text-2xl font-bold underline mt-4">Work</h3>
      <p className="mt-4 text-lg">
        Arkar Min a passionate programmer, a self-teach learner and an
        undergraduate student, residing in Yangon (Myanmar), possesses a
        profound enthusiasm for crafting software products and toolings that
        align with his interests. His experience ranges from the very stages of
        planning and designing to putting ideas that use code to solve
        real-world problems into practice. His goal is to create software,
        toolings and libraries to enjoy for other people with ease of use and
        free.
      </p>
      <div id="btn" className="flex items-center justify-center mt-10 h-2">
        <Link href={"/works"} className={cn("text-lg mx-auto font-bold  ")}>
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 rounded-lg" />
            <div className="flex items-center gap-3 px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              My Works <ArrowBigRightDashIcon className=" w-6 h-6" />
            </div>
          </button>
        </Link>
      </div>
    </>
  );
};

export default IntroText;
