"use client";
import { ModeToggle } from "@/components/modetoggle";
import useScrollHook from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Globe2 } from "lucide-react";
import Link from "next/link";

const NavBarBlog = () => {
  const isScrolled = useScrollHook();
  return (
    <div
      className={cn(
        "h-16 w-full flex items-center z-10 justify-between px-14 pt-2 fixed ",
        isScrolled && "border-b dark:border-zinc-600"
      )}
    >
      <div className="h-full w-fit cursor-pointer flex items-center justify-center space-x-2">
        <Globe2></Globe2>
        <span className="uppercase">Globally</span>
      </div>
      <div className="flex items-center w-fit h-full space-x-4">
        <UserButton></UserButton>
      </div>
    </div>
  );
};

export default NavBarBlog;
