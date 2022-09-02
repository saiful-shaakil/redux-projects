import React from "react";
import Pagination from "./Pagination";
import Tags from "./Tags";
import VideoGrid from "./VideoGrid";

export default function HomePage() {
  return (
    <div>
      <Tags />
      <VideoGrid />
      <Pagination />
    </div>
  );
}
