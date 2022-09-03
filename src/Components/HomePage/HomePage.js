import React from "react";
import Reset from "../Reset";
import Pagination from "./Pagination";
import Tags from "./Tags";
import VideoGrid from "./VideoGrid";

export default function HomePage() {
  return (
    <div>
      <div className="flex justify-between items-center mx-auto w-[80%]">
        <Tags />
        <Reset />
      </div>
      <VideoGrid />
      <Pagination />
    </div>
  );
}
