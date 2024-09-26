import React from "react";
import NavBarBlogs from "./_components/navbar";
import SideNav from "../../components/ui/sidenav";
import { PlusCircle, Newspaper, MessageCircleIcon, ChartBarIncreasing, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

const page = () => {
  const sideNavs = [
    {
      lable: "New Blog",
      href: "/blogs/writeblogs",
      children: <PlusCircle className="h-4 w-4"></PlusCircle>,
    },
    {
      lable: "All Posts",
      href: "/posts",
      children: <Newspaper className="h-4 w-4"></Newspaper>,
    },
    {
      lable: "Comments",
      href: "/comments",
      children: <MessageCircleIcon className="h-4 w-4"></MessageCircleIcon>,
    },
    {
      lable: "Analytics",
      href: "/analytics",
      children: (
        <ChartBarIncreasing className="h-4 w-4 -rotate-90"></ChartBarIncreasing>
      ),
    },
    {
      lable: "Bin",
      href: "/bin",
      children: <Trash className="h-4 w-4"></Trash>,
    },
  ];
  return (
    <div className="w-full h-screen ">
      <NavBarCMP></NavBarCMP>
      <NavBarBlogs></NavBarBlogs>
      <SideNav navigations={sideNavs} classProps="top-24"></SideNav>
      <Button size={"default"} variant={"outline"}>danish</Button>
    </div>
  );
};

export default page;
