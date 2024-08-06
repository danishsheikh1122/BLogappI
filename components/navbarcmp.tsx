"use client";
import { Divide, Globe, Globe2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./modetoggle";
import { SignInButton, useAuth, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import useScrollHook from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
const NavBarCmp = () => {
  const { isLoaded, userId } = useAuth();
  const isScrolled = useScrollHook();
  return (
    <div
      className={cn(
        "h-16 w-full px-4 flex items-center z-10 top-0 justify-between",
        isScrolled && "border-b dark:border-zinc-600"
      )}
    >
      <div className="h-full w-fit cursor-pointer flex items-center justify-center space-x-2">
        <Globe2></Globe2>
        <span className="uppercase">Globally</span>
      </div>
      <div className="flex items-center w-fit h-full space-x-4">
        {!userId && (
          <Link href="/sign-in">
            <Button variant={"outline"} size={"default"}>
              Login
            </Button>
          </Link>
        )}
        {userId && (
          <Button size={"default"} variant={"default"}>
            Create Your Blog
          </Button>
        )}
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
};

export default NavBarCmp;
