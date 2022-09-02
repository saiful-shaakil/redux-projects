import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../../Redux/features/video/videoSlice";
import like from "../../assets/like.svg";
import dislike from "../../assets/unlike.svg";
import RelatedVideos from "./RelatedVideos";
export default function VideoPage() {
  const { videoId } = useParams();
  const dispatch = useDispatch();
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
  }, [videoId, dispatch]);
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
                    <div className="shrink-0">
                      <img className="w-5 block" src={like} alt="Like" />
                    </div>
                    <div className="text-sm leading-[1.7142857] text-slate-600">
                      {likes}
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="shrink-0">
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
