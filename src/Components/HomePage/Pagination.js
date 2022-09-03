import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pagination } from "../../Redux/features/filter/filterSlice";
import { fetchVideos } from "../../Redux/features/videos/videosSlice";

export default function Pagination() {
  const dispatch = useDispatch();
  const { tags, search, authorName, start, end } = useSelector(
    (state) => state.filter
  );
  useEffect(() => {
    dispatch(fetchVideos({ tags, search, authorName, start, end }));
  }, [dispatch, tags, search, authorName, start, end]);
  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        <div
          onClick={() => dispatch(pagination({ start: 0, end: 4 }))}
          className={`${
            start === 0 ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
          } cursor-pointer   px-4 py-1 rounded-full`}
        >
          1
        </div>
        <div
          onClick={() => dispatch(pagination({ start: 4, end: 8 }))}
          className={`${
            start === 4 ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
          } cursor-pointer   px-4 py-1 rounded-full`}
        >
          2
        </div>
        <div
          onClick={() => dispatch(pagination({ start: 8, end: 12 }))}
          className={`${
            start === 8 ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
          } cursor-pointer   px-4 py-1 rounded-full`}
        >
          3
        </div>
        <div
          onClick={() => dispatch(pagination({ start: 12, end: 16 }))}
          className={`${
            start === 12
              ? "bg-blue-600 text-white"
              : "bg-blue-100 text-blue-600"
          } cursor-pointer   px-4 py-1 rounded-full`}
        >
          4
        </div>
      </div>
    </section>
  );
}
