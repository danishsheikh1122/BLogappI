'use client'
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";

const SearchBarCmp = () => {
  return (
    <div className="my-10 h-10 sm:w-full md:w-1/3 lg:w-1/3 px-2 ml-auto flex items-center rounded-xl border border-slate-600 dark:border-white dark:bg-black">
      <div className="h-full w-full">
        <input
          type="text"
          className="h-full w-full border-none outline-none dark:bg-black"
        />
      </div>
      <Button
        size={"sm"}
        variant={"outline"}
        className="ml-auto border-none bg-transparent hover:bg-white shadow-none dark:bg-black"
        onClick={() => {}}
      >
        <Search className="h-4 w-4 text-muted-foreground"></Search>
      </Button>
    </div>
  );
};

export default SearchBarCmp;
