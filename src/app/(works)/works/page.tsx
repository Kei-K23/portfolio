import { works } from "@/shared/works";
import React from "react";
import { HoverEffect } from "../components/hover-effect";
import { cn } from "@/lib/utils";
import { pressStart2P } from "@/app/fonts";
import Link from "next/link";

const WorksPage = async () => {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-20">
      <div>
        <h2 className={cn(pressStart2P.className, "text-sm text-center mt-5")}>
          Total Projects:{" "}
          <span className="text-emerald-500 text-base font-bold">
            {works.length}
          </span>
        </h2>
        <p className="text-center mt-2">
          These {works.length} projects are the only hosted project. You can
          fine other project on my{" "}
          <Link
            href={"https://github.com/Kei-K23"}
            target="_blank"
            className="text-emerald-500"
          >
            Github
          </Link>{" "}
          .
        </p>
      </div>
      <HoverEffect items={works} />
    </div>
  );
};

export default WorksPage;
