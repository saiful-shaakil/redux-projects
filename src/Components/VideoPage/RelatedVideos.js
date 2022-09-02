import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../Redux/features/relatedVideos/relatedVideosSlice";
export default function RelatedVideos({ currentVideoId, tags }) {
  const dispatch = useDispatch();
  const { relatedVideos, error } = useSelector((state) => state.relatedVideos);
  useEffect(() => {
    dispatch(fetchRelatedVideos(tags, currentVideoId));
  }, [currentVideoId, tags, dispatch]);
  //   console.log(relatedVideos);
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* <!-- single related video --> */}
      {relatedVideos?.map((video) => (
        <div key={video.id} className="w-full flex flex-row gap-2 mb-4">
          <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
            <Link to={`/videos/${video.id}`}>
              <img
                src={video.thumbnail}
                className="object-cover"
                alt="Some video title"
              />
            </Link>
            <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
              {video.duration}
            </p>
          </div>

          <div className="flex flex-col w-full">
            <Link to={`/videos/${video.id}`}>
              <p className="text-slate-900 text-sm font-semibold">
                {video.title}
              </p>
            </Link>
            <Link
              className="text-gray-400 text-xs mt-2 hover:text-gray-600"
              to=""
            >
              {video.author}
            </Link>
            <p className="text-gray-400 text-xs mt-1">
              {video.views} views . {video.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
