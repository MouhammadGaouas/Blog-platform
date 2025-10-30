import axios from "axios";
import React, { useState } from "react";

export const CreatePost = ({ visible, onClose }) => {
  const handleCreatePost = async () => {
    const res = await axios.post("http://localhost:5000/api/createNewPost", {
      title,
      content,
    });
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div
      className={`bg-white shadow-[0px_4px_15px_7px_rgba(0,_0,_0,_0.1)] pb-6  md:w-[700px] fixed z-1 top-1/2 -translate-y-1/2  rounded-2xl ${
        visible ? "block" : "hidden"
      }`}
    >
      <h2 className="text-3xl text-center mt-3 font-semibold cursor-default">
        Create Post
      </h2>
      <div className="ml-7 mt-4">
        <div>
          <label className="text-xl font-medium" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            className="block bg-[#BDCDE7] text-lg py-2 px-2 resize-none rounded-lg border-2"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mt-8">
          <label className="text-xl font-medium" htmlFor="title">
            Content
          </label>
          <textarea
            className="block w-[80%] p-1 bg-[#BDCDE7] rounded-lg border-2 resize-none"
            name="content"
            id="content"
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            cols={50}
          ></textarea>
        </div>
        <div className="mt-4">
          <button
            onClick={() => {
              handleCreatePost();
              onClose();
            }}
            className="mt-4 bg-[#3E4C80] rounded-lg text-white px-6 py-2 w-40 text-xl font-semibold cursor-pointer"
          >
            Post
          </button>
          <button
            onClick={onClose}
            className="mt-4 bg-[#3E4C80] rounded-lg text-white px-6 py-2 w-40 text-xl font-semibold ml-4 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
