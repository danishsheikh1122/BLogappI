"use client";
import { Blog } from "@prisma/client";
import React, { ElementRef, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Editor from "../editor";
import axios from "axios";

interface Props {
  preview?: boolean;
  initialData?: Blog;
}

const EditingArea: React.FC<Props> = ({ initialData, preview }) => {
  const [title, setTitle] = useState(initialData?.title);
  const [editable, setEditable] = useState(false);
  const inputRef = useRef<ElementRef<"textarea">>(null);

  const onChange = async (content: string) => {
    console.log(title);
    await axios.post("http://localhost:3000/api/blogs", { title, content });
  };

  const enableInput = async () => {
    if (preview) return;
    setEditable(true);
    setTimeout(() => {
      setTitle(inputRef.current?.value);
      inputRef.current?.focus();
    });
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      enableInput();
    }
  };

  const disableInput = () => {
    setEditable(false);
  };

  return (
    <div>
      <TextareaAutosize
        ref={inputRef}
        onKeyDown={onKeyDown}
        onBlur={disableInput}
        className="w-full text-5xl bg-transparent font-bold outline-none text-[#3F3F3F] mb-4 px-4 break-words dark:text-[#CFCFCF] resize-none"
        placeholder="title"
      ></TextareaAutosize>
      <Editor onChange={onChange}></Editor>
    </div>
  );
};

export default EditingArea;
