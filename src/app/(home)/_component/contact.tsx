"use client";
import { pressStart2P } from "@/app/fonts";
import { BackgroundBeams } from "@/components/aceternity/background-beam";
import { cn } from "@/lib/utils";
import { contact } from "@/shared/contact";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="my-[160px] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl mx-auto p-4">
        <h2
          className={cn(
            pressStart2P.className,
            "mb-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 bg-clip-text text-transparent text-center text-xl md:text-2xl"
          )}
        >
          Contact Me
        </h2>
        <p className="mb-3">
          Send email to:{" "}
          <a
            href="mailto:arkar.dev.kei@gmail.com"
            className="hover:text-emerald-500 hover:underline transition-all"
          >
            arkar.dev.kei@gmail.com
          </a>
        </p>
        <div className="grid grid-cols-4">
          {contact.map((c) => (
            <Link href={c.link} key={c.name} target="_blank">
              {c.icon}
            </Link>
          ))}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Contact;
