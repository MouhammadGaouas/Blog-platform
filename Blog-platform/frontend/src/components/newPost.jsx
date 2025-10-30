import React, { use, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";

export const NewPost = ({ post }) => {
  const [Like, setLike] = useState();
  const [Dislike, setDislike] = useState();
  const [reaction, setReaction] = useState(null);
  const [likesCount, setLikesCount] = useState(0);
  const [dislikeCout, setDislikeCount] = useState(0);

const handleLike = () => {
  setReaction(prevReaction => {
    if (prevReaction === "like") {
      setLikesCount(prev => prev - 1);
      return null;
    } else {
      if (prevReaction === "dislike") {
        setDislikesCount(prev => prev - 1);
      }
      setLikesCount(prev => prev + 1);
      return "like";
    }
  });
  
  setReaction(prev => {
    setLike(prev === "like");
    setDislike(false);
    return prev;
  });
};

  const handleDislike = () => {
    if (reaction === "dislike") {
      setReaction(null);
      setDislike(false);
      setDislikeCount(dislikeCout - 1);
    } else {
      setReaction("dislike");
      setDislike(true);
      setLike(false);
      setDislikeCount(dislikeCout + 1);
    }
  };

  return (
    <div>
      <div className="bg-[#FFF1F1] md:w-[670px] pb-4 pt-2 rounded-lg px-5 relative shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.3)]">
        <FaRegEdit className="absolute top-2 right-2 text-xl" />
        <div className="flex md:gap-0 gap-4 md:flex-row flex-col  items-center justify-between mt-2">
          <div className="flex items-center gap-4 w-max p-2 rounded-lg">
            <img className="md:w-10 w-8" src="/man.png" alt="man-icon" />{" "}
            <p className="md:text-lg text-sm font-medium"> Mouhammad</p>
          </div>
          <p className="md:text-[1em] text-sm">
            <span className="font-semibold">Uploaded in : </span>
            {post.date}
          </p>
        </div>

        <h3 className="text-xl font-medium pt-8">{post.title}</h3>

        <div className="pt-2">
          <p className="tracking-wider">{post.content}</p>
        </div>

        <div className="flex items-center gap-8 mt-4">
          <div
            onClick={handleLike}
            className={`flex items-center  flex-col cursor-pointer ${
              Like ? "bg-red-300" : "bg-gray-100"
            } px-3 py-1 rounded-lg border`}
          >
            <FcLike className="text-2xl" />
            {post.likes + likesCount}
          </div>
          <div
            onClick={handleDislike}
            className={`flex items-center  flex-col cursor-pointer ${
              Dislike ? "bg-red-300" : "bg-gray-100"
            } px-3 py-1 rounded-lg border`}
          >
            <FcDislike className="text-2xl" />
            {post.dislikes + dislikeCout}
          </div>
        </div>
      </div>
    </div>
  );
};
