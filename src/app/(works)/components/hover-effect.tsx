"use client";
import { pressStart2P } from "@/app/fonts";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    name: string;
    description: string;
    img: string;
    languages: Array<string>;
    htmlLink: string;
    githubLink: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={item.name}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardImg img={item.img} />
            <CardTitle>{item.name}</CardTitle>
            <CardList languages={item.languages} />
            <CardDescription>{item.description}</CardDescription>
            <div className="flex items-center gap-2 mt-2 justify-center">
              <Link
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  })
                )}
                href={item.htmlLink}
                target="_blank"
              >
                <Icon icon="fe:globe" className="mr-2 text-[1.4rem]" /> Website
              </Link>
              <Link
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  })
                )}
                href={item.githubLink}
                target="_blank"
              >
                <Icon icon="mdi:github" className="mr-2 text-[1.4rem]" /> Github
              </Link>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        " rounded-2xl h-full w-full  overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        pressStart2P.className,
        "text-zinc-100 font-bold tracking-wide mt-3 text-xs",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardImg = ({
  className,
  img,
}: {
  className?: string;
  img: string;
}) => {
  if (img === "") {
    return (
      <ImageIcon
        className={cn(className, "w-full h-[150px] text-muted-foreground")}
      />
    );
  }
  return (
    <Image
      width={150}
      height={150}
      src={"/works/" + img}
      alt={img}
      className={cn(className, "w-full h-[150px]")}
    />
  );
};

export const CardList = ({ languages }: { languages: Array<string> }) => {
  return (
    <ul className="mt-2 flex items-center flex-wrap gap-x-3 gap-y-1">
      {languages.map((l) => (
        <li key={l} className="border border-emerald-500 rounded-md py-1 px-2">
          {l}
        </li>
      ))}
    </ul>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed ",
        className
      )}
    >
      {children}
    </p>
  );
};
