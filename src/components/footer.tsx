import { pressStart2P } from "@/app/fonts";
import { cn } from "@/lib/utils";
import React from "react";

const Footer = () => {
  return (
    <footer className="pb-10">
      <p
        className={cn(
          pressStart2P.className,
          "text-muted-foreground text-center text-xs"
        )}
      >
        Copyright © {new Date().getFullYear()} Arkar Min
      </p>
    </footer>
  );
};

export default Footer;
