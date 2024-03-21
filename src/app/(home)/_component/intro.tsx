"use client";
import { pressStart2P } from "@/app/fonts";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, useInView } from "framer-motion";
import { ArrowBigRightDashIcon, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimate } from "framer-motion";
import { BackgroundBeams } from "@/components/aceternity/background-beam";
import IntroText from "./intro-text-";

const Intro = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const h2Motion = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
    },
    transition: { duration: 0.4 },
  };

  const h3Motion = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
    },
    transition: { duration: 0.5 },
  };

  const pMotion = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: { duration: 0.4 },
  };

  const btnMotion = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: { duration: 0.5 },
  };

  useEffect(() => {
    (async () => {
      if (isInView) {
        await animate("h2", h2Motion.animate, h2Motion.transition);
        await animate("h3", h3Motion.animate, h3Motion.transition);
        await animate("p", pMotion.animate, pMotion.transition);
        await animate("#btn", btnMotion.animate, btnMotion.transition);
      } else {
        await animate("h2", h2Motion.initial, { duration: 0.1 });
        await animate("h3", h3Motion.initial, { duration: 0.1 });
        await animate("p", pMotion.initial, { duration: 0.1 });
        await animate("#btn", btnMotion.initial, { duration: 0.1 });
      }
    })();
  }, [isInView]);

  return (
    <AnimatePresence>
      <div className="h-[40rem] w-full relative flex flex-col items-center justify-center antialiased">
        <div ref={scope} className="max-w-3xl mx-auto p-4 w-full mt-48">
          <IntroText />
        </div>
        <BackgroundBeams />
      </div>
    </AnimatePresence>
  );
};

export default Intro;
