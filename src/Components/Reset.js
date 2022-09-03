import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "../Redux/features/filter/filterSlice";

export default function Reset() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(reset())}
        className="bg-red-200 p-2 rounded-2xl"
      >
        Reset Filter
      </button>
    </div>
  );
}
