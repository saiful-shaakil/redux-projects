import { useGetVideosQuery } from "../../features/api/apiSlice";
import Video from "./Video";
import VideoLoader from "../../components/ui/loaders/VideoLoader";
import Error from "../../components/ui/Error";

export default function Videos() {
  const { data: videos, isLoading, isError } = useGetVideosQuery();
  if (isLoading) {
    return (
      <>
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
      </>
    );
  }
  if (!isLoading && isError) {
    return <Error message="There was an error." />;
  }
  if (!isLoading && !isError && videos.length === 0) {
    return <Error message="No videos found." />;
  }
  return (
    <>
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </>
  );
}
