import { SingleImageDropzone } from "@/components/DROPZONEcmp";
import React, { useState } from "react";

const Uploads = () => {
  const [file, setFile] = useState<File | undefined>(); // State for the selected file

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <SingleImageDropzone
        width={200}
        height={200}
        value={file}
        onChange={(fileUrl) => {
          console.log("File selected:", fileUrl);
          setFile(fileUrl); // Set the file URL in the parent state
        }}
      />
      {file && (
        <div className="mt-4">
          <p>Uploaded Image URL: {file}</p> {/* Display the uploaded image URL */}
        </div>
      )}
      
    </div>
  );
};

export default Uploads;
