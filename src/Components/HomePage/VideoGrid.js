import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../Redux/features/videos/videosSlice";
import Video from "./Video";
export default function VideoGrid() {
  const dispatch = useDispatch();
  const { videos, loading, error } = useSelector((state) => state.videos);
  const { tags, search } = useSelector((state) => state.filter);
  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
  }, [dispatch, tags, search]);
  // conditon
  if (loading)
    return (
      <div>
        <p>Loding</p>
      </div>
    );
  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {/* <!-- single video --> */}
          {videos
            ? videos.map((video) => <Video video={video} key={video.id} />)
            : error}
          {/* <!-- error section */}
        </div>
      </section>
    </section>
  );
}
