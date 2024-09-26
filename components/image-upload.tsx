"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ImagePlus, Trash } from "lucide-react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";

interface ImageUploadProps {
  onImageChange?: (images: string[]) => void; // Callback to send image URLs
  disabled?: boolean; // Optional: disable the upload button
  value: string[]; // Current images
  onChange: (value: string[]) => void; // Function to update images
  onRemove: (value: string) => void; // Function to remove an image
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageChange,
  disabled,
  value,
  onChange,
  onRemove,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (onImageChange) {
      onImageChange(value); // Notify parent of image URL changes
    }
  }, [value, onImageChange]);

  const onUpload = (result: any) => {
    console.log("Upload result:", result); // Log the entire result to the console
    if (result?.info?.secure_url) {
      onChange([...value, result.info.secure_url]); // Update the parent with the new URL
    }
  };

  if (!isMounted) return null; // Prevent hydration errors

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map((url) => (
          <div
            key={url}
            className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
          >
            <div className="z-10 absolute top-2 right-2">
              <Button
                type="button"
                onClick={() => onRemove(url)} // Call the remove function
                variant={"destructive"}
                size={"icon"}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <Image className="object-cover" alt="Uploaded" src={url} fill />
          </div>
        ))}
      </div>
      <CldUploadWidget
        onUpload={onUpload}
        uploadPreset="an85tgnf" // Ensure this is a valid preset
      >
        {({ open }) => (
          <Button disabled={disabled} onClick={open} variant={"secondary"}>
            <ImagePlus className="h-4 w-4" />
            Upload an image
          </Button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
