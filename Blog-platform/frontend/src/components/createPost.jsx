import axios from "axios";
import React, { useState } from "react";

export const CreatePost = ({visible , onClose}) => {

  const handleCreatePost = async () => {
    const res = await axios.post("http://localhost:5000/api/newPost", {title , content})
    console.log(res.data.message);
  }

  const [title , setTitle] = useState('')
  const [content , setContent] = useState('')


  return (
    <div className={`bg-white h-[380px] w-[700px] fixed z-1 top-1/2 -translate-y-1/2 border-3 rounded-2xl ${visible ? "block" : "hidden"}`}>
      <h2 className="text-3xl text-center mt-3 font-semibold cursor-default">
        Create Post
      </h2>
      <div className="ml-7 mt-4">
        <div>
          <label className="text-xl font-medium tracking-wider" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            className="block bg-gray-300 text-lg py-1 pl-2 rounded-lg resize-none"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <label className="text-xl font-medium tracking-wider" htmlFor="title">
            Content
          </label>
          <textarea
            className="block p-1 bg-gray-300 rounded-lg"
            name="content"
            id="content"
            onChange={(e) => setContent(e.target.value) }
            rows={4}
            cols={50}
          ></textarea>
        </div>
        <div className="mt-4">
          <button onClick={() => handleCreatePost()} className="mt-4 bg-blue-400 text-white px-6 py-2 w-40 text-xl font-semibold rounded-sm cursor-pointer">
            Post
          </button>
          <button onClick={onClose} className="mt-4 bg-red-400 text-white px-6 py-2 w-40 text-xl font-semibold ml-4 rounded-sm cursor-pointer">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
