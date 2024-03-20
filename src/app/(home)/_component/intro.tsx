"use client";
import { pressStart2P } from "@/app/fonts";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimate } from "framer-motion";
import { BackgroundBeams } from "@/components/aceternity/background-beam";

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

  // const btnMotion = {
  //   initial: { opacity: 0, y: 100 },
  //   animate: {
  //     opacity: 1,
  //     y: 0,
  //   },
  //   transition: { duration: 0.5 },
  // };

  useEffect(() => {
    (async () => {
      if (isInView) {
        await animate("h2", h2Motion.animate, h2Motion.transition);
        await animate("h3", h3Motion.animate, h3Motion.transition);
        await animate("p", pMotion.animate, pMotion.transition);
        // await animate("#btn", btnMotion.animate, btnMotion.transition);
      } else {
        await animate("h2", h2Motion.initial, { duration: 0.1 });
        await animate("h3", h3Motion.initial, { duration: 0.1 });
        await animate("p", pMotion.initial, { duration: 0.1 });
        // await animate("#btn", btnMotion.initial, { duration: 0.1 });
      }
    })();
  }, [isInView]);

  return (
    <AnimatePresence>
      <div className="h-[40rem] w-full relative flex flex-col items-center justify-center antialiased">
        <div ref={scope} className="max-w-3xl mx-auto p-4 w-full">
          <div className="flex items-start justify-between">
            <div>
              <h2 className={cn(pressStart2P.className, "text-xl md:text-2xl")}>
                Arkar Min
              </h2>
              <h3 className="text-lg font-bold">Full stack developer</h3>
            </div>
            <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden">
              <Image
                fill
                src="https://avatars.githubusercontent.com/u/134714087?v=4"
                alt="Arkar Min's img"
              />
            </div>
          </div>
          <h3 className="text-2xl font-bold">Work</h3>
          <p className="mt-4 text-lg">
            Arkar Min a passionate programmer, a self-teach learner and an
            undergraduate student, residing in Yangon (Myanmar), possesses a
            profound enthusiasm for crafting software products and toolings that
            align with his interests. His experience ranges from the very stages
            of planning and designing to putting ideas that use code to solve
            real-world problems into practice. His goal is to create software,
            toolings and libraries to enjoy for other people with ease of use
            and free.
          </p>
          <div id="btn" className="flex items-center justify-center mt-6 ">
            <Link
              href={"/works"}
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "lg",
                }),
                "text-lg mx-auto font-bold "
              )}
            >
              My works <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </AnimatePresence>
  );
};

export default Intro;
