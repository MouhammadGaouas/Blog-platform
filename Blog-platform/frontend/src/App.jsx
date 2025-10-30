import { use, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { NewPost } from "./components/newPost";
import { CreatePost } from "./components/createPost";

function App() {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/api/getNewPost")
        .then((res) => setAllPosts(res.data.post));
    } catch (err) {
      console.error("Error ocured:", err);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#1A2A4F] flex items-center justify-center">
      <CreatePost
        visible={showCreatePost}
        onClose={() => setShowCreatePost(!showCreatePost)}
      />
      <div className="flex items-center justify-center flex-col gap-10 w-max py-10 px-5 min-h-screen">
        <button
          className="text-3xl font-semibold text-white bg-blue-500  py-2 px-8 rounded-lg cursor-pointer"
          onClick={() => setShowCreatePost(!showCreatePost)}
        >
          Create a Post
        </button>

        {allPosts.map((post, key) => {
          return <NewPost key={key} post={post} />;
        })}
      </div>
    </div>
  );
}

export default App;
