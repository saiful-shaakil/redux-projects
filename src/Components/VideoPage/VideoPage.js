import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../../Redux/features/video/videoSlice";
import like from "../../assets/like.svg";
import dislike from "../../assets/unlike.svg";
import RelatedVideos from "./RelatedVideos";
import { useState } from "react";
export default function VideoPage() {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const [updateLikes, setUpdateLikes] = useState(0);
  const [updateDislikes, setUpdateDislikes] = useState(0);
  const { video, error } = useSelector((state) => state.video);
  const {
    title,
    author,
    avatar,
    date,
    description,
    duration,
    id,
    likes,
    link,
    unlikes,
    tags,
  } = video;
  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [videoId, dispatch, updateLikes, updateDislikes]);

  const handleLike = (id) => {
    const newLikeCount = likes + 1;
    fetch(`https://young-hamlet-88517.herokuapp.com/videos/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ likes: newLikeCount }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdateLikes(data.likes);
      });
  };
  const handleDislike = (id) => {
    const newDislikeCount = unlikes + 1;
    fetch(`https://young-hamlet-88517.herokuapp.com/videos/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ unlikes: newDislikeCount }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdateDislikes(data.unlikes);
      });
  };
  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {/* <!-- video player --> */}
            <iframe
              width="100%"
              className="aspect-video"
              src={link}
              title={title}
              freameborder=""
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* <!-- video description --> */}
            <div>
              <h1 className="text-lg font-semibold tracking-tight text-slate-800">
                {title}
              </h1>
              <div className="pb-4 flex items-center space-between border-b">
                <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
                  Uploaded on {date}
                </h2>

                {/* <!-- like/unlike --> */}
                <div className="flex gap-10 w-48">
                  <div className="flex gap-1">
                    <div
                      onClick={() => handleLike(id)}
                      className="shrink-0  cursor-pointer"
                    >
                      <img className="w-5 block" src={like} alt="Like" />
                    </div>
                    <div className="text-sm leading-[1.7142857] text-slate-600">
                      {likes}
                    </div>
                  </div>
                  <div className="flex gap-1 cursor-pointer">
                    <div
                      onClick={() => handleDislike(id)}
                      className="shrink-0 cursor-pointer"
                    >
                      <img className="w-5 block" src={dislike} alt="Unlike" />
                    </div>
                    <div className="text-sm leading-[1.7142857] text-slate-600">
                      {unlikes}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
                {description}
              </div>
            </div>
          </div>

          {/* <!-- related videos --> */}
          <RelatedVideos tags={tags} currentVideoId={id} />
        </div>
      </div>
    </section>
  );
}
