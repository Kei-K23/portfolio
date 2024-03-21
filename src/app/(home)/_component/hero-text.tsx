import { pressStart2P } from "@/app/fonts";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { motion, useAnimate, useInView } from "framer-motion";
import Link from "next/link";

const HeroText = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const h1Motion = {
    initial: { opacity: 0, y: -100 },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: { duration: 0.4 },
  };

  const h2Motion = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: { duration: 0.4 },
  };

  useEffect(() => {
    (async () => {
      if (isInView) {
        await animate("h1", h1Motion.animate, h1Motion.transition);
        await animate("h2", h2Motion.animate, h2Motion.transition);
      } else {
        await animate("h1", h1Motion.initial, { duration: 0.1 });
        await animate("h2", h2Motion.initial, { duration: 0.1 });
      }
    })();
  }, [isInView]);

  return (
    <div ref={scope} className="space-y-4">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.4 }}
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
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.4 }}
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
      </motion.h2>
    </div>
  );
};

export default HeroText;
