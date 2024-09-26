"use client";

import { Button } from "@/components/ui/button";
import { useEdgeStore } from "@/lib/edgestore";
import { useUser } from "@clerk/nextjs";
import { EmailAddress } from "@clerk/nextjs/server";
import { Divide } from "lucide-react";
import { useState } from "react";
import {  } from "./dropDownCMP";

export function SingleImageDropzone() {
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();
  const [progress, setProgress] = useState(0);
  // const [url, setUrl] = useState(""); //type safety
  const [url, setUrl] = useState<{ url: string }[]>([]); //type safety

  const { user, isSignedIn } = useUser();

  function checkUserandPostFile(url: string) {
    throw new Error("Function not implemented.");
  }

  //   setUrl({
  //     url: res.url
  // } see how we can use this
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <SingleImageDropzone
        width={200}
        height={200}
        value={file}
        onChange={(file) => {
          setFile(file);
        }}
      />
      <div>{progress}%</div>
      <div className="h-[6px] w-44 border rounded overflow-hidden">
        <div
          className="h-full bg-black dark:bg-white transition-all duration-150"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <Button
        variant={"outline"}
        size={"lg"}
        onClick={async () => {
          if (file) {
            const res = await edgestore.publicFiles.upload({
              file,
              onProgressChange: (progress) => {
                setProgress(progress);
              },
            });
           
            console.log(res)

           
          }
        }}
      >
        Upload 
      </Button>
      {isSignedIn && (
        <div>
          {user.emailAddresses[0].emailAddress} {user.id}
        </div>
      )}
    </div>
  );
}


