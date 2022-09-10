import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import PlayerLoader from "../ui/loaders/PlayerLoader";
import DescriptLoader from "../ui/loaders/DescriptionLoader";
import Description from "../video/Description";
import Player from "../video/Player";
import RelatedVideos from "../video/related/RelatedVideos";
import RelatedVideoLoader from "../ui/loaders/RelatedVideoLoader";
export default function Video() {
  const { videoId } = useParams();
  const { data: video, isLoading, isError } = useGetVideoQuery(videoId);
  if (isLoading) {
    return (
      <>
        <PlayerLoader />
        <DescriptLoader />
      </>
    );
  }
  if (!isLoading && isError) {
    return <Error message="There was an error." />;
  }
  //   if (!isLoading && !isError && video.length === 0) {
  //     return <Error message="No videos found." />;
  //   }
  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            <Player video={video} />
            <Description video={video} />
          </div>

          {video?.id ? (
            <RelatedVideos id={video?.id} title={video?.title} />
          ) : isLoading ? (
            <>
              <RelatedVideoLoader />
              <RelatedVideoLoader />
              <RelatedVideoLoader />
            </>
          ) : (
            <Error message="There was an error!" />
          )}
        </div>
      </div>
    </section>
  );
}
