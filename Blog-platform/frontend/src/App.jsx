import { useState } from "react";
import "./App.css";
import axios from "axios";
import { NewPost } from "./components/newPost";
import { CreatePost } from "./components/createPost";

function App() {
  const [showCreatePost , setShowCreatePost] = useState(false)



  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center">
      <CreatePost visible = {showCreatePost} onClose ={() => setShowCreatePost(!showCreatePost)}/>
      <div className="flex items-center justify-center flex-col gap-10 bg-purple-400 w-max py-10 px-5 min-h-screen">
        <button
          className="text-3xl font-semibold text-white bg-blue-600  py-2 px-8 rounded-lg cursor-pointer"
          onClick={() => setShowCreatePost(!showCreatePost)}
        >
          Create a Post
        </button>
        <NewPost />
        <NewPost />
      </div>
    </div>
  );
}

export default App;
