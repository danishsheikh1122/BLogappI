"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  ChartBarIncreasing,
  ChevronsLeft,
  MessageCircleIcon,
  Newspaper,
  Plus,
  PlusCircle,
  Settings,
  Trash,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
interface Props {
  navigations: Array<{
    lable: string;
    href: string;
    children?: React.ReactNode;
  }>;
  classProps?:string
}

const SideNav: React.FC<Props> = ({ navigations ,classProps}) => {
  const { user } = useUser();
  // const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className="h-[50%] w-[240px]">
      <nav
        className={cn(`h-full w-full relative
          left-5 rounded-lg  bg-muted px-2 py-2 flex flex-col items-center space-y-4 z-100`,classProps)}
      >
        <div className="w-full flex justify-between items-center ">
          <div className="flex justify-center items-center gap-2">
            <UserButton></UserButton>
            {user?.firstName}
          </div>
        </div>

        <Separator className="dark:bg-white/20"></Separator>
        {navigations.map((item) => (
          <div
            key={item.lable}
            role="button"
            className="w-full h-8 flex items-center text-muted-foreground "
          >
            <Link
              href={`${item.href}`}
              className="hover:border-b-2 w-full h-full ml-4 flex gap-2 items-center"
            >
              {item.lable}
              {item.children}
            </Link>
          </div>
        ))}
        <Separator></Separator>
        <div
          role="button"
          className="w-full h-8 flex items-center text-muted-foreground hover:border-b-2 ml-4 gap-2"
        >
          Settings
          <Settings className="h-4 w-4"></Settings>
        </div>
      </nav>
    </aside>
  );
};

export default SideNav;
