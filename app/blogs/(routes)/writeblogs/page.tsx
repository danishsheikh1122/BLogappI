"use client";
import React, { ReactHTMLElement, useState } from "react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import NavBarNewBlog from "./_components/navbar";
import Editor from "@/components/editor";
import { Button } from "@/components/ui/button";
import { Globe, Globe2, Trash } from "lucide-react";

import Link from "next/link";
import EditingArea from "@/components/ui/EditingArea";
import SideNav from "@/components/ui/sidenav";

const WriteBlogs = () => {
  const handelOnPublish = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    // post request and redirect to blogs page
  };

  const sideNavs = [
    {
      lable: "New Blog",
      href: "/blogs/",
    },
  ];
  return (
    <>
      <NavBarNewBlog></NavBarNewBlog>

      <div className="pt-20">
        <div className="grid grid-cols-[1fr_5fr_1fr] gap-4">
          <div className=" px-4 rounded h-fit">
            <SideNav navigations={sideNavs}  />
          </div>
          <div className="p-4 rounded w-full h-full">
            <EditingArea preview={false}></EditingArea>
          </div>
          <div className="p-4 rounded h-fit flex flex-col items-center space-y-4">
            <Button
              variant={"default"}
              size={"lg"}
              className="p-6 gap-4"
              onClick={handelOnPublish}
            >
              Publish
              <Globe2 className="h-6 w-6"></Globe2>
            </Button>
            <Button variant={"destructive"} size={"lg"} className="p-6 gap-4">
              Delete
              <Trash className="h-6 w-6"></Trash>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteBlogs;
