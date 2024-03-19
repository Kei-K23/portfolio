import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface ResponsiveMenuProps {
  path: string;
}

const ResponsiveMenu = ({ path }: ResponsiveMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="block md:hidden">
        <Button variant={"outline"} size={"sm"}>
          <Menu className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className={cn(
            path === "/works" &&
              "bg-indigo-200 dark:bg-indigo-800 dark:focus:bg-indigo-800 focus:bg-indigo-200"
          )}
        >
          <Link href={"/works"} className="w-full">
            Works
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(
            path === "/posts" &&
              "bg-indigo-200 dark:bg-indigo-800 dark:focus:bg-indigo-800 focus:bg-indigo-200"
          )}
        >
          <Link href={"/posts"} className="w-full">
            Posts
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href={"https://github.com/Kei-K23"}
            target="_blank"
            className="w-full"
          >
            Source
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ResponsiveMenu;
