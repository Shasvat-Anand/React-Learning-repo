import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const ViewPaste = () => {
  const [title, setTitle] = useState("");

  const [value, setValue] = useState();

  const [searchParams, setSearchParam] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  return (
    <div>
      <div>
        <input
          className="p-4 border-1 border-grey-600 rounded-2xl w-96"
          type="text"
          placeholder="Enter your title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="p-4 border-1 border-green-400 rounded-2xl m-4 cursor-pointer --accent">
          {pasteId ? "Update Content" : "Create Content"}
        </button>
      </div>

      <div className="mt-5 ">
        <textarea
          className="p-4 min-w-[900px] field-sizing-fixed resize-none border-2 border-gray-500 rounded-xl "
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Your content here"
          rows={20}
        ></textarea>
      </div>
    </div>
  );
};

export default ViewPaste;
