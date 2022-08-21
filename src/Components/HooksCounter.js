import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Redux/CounterFeatures/action";
function HooksCounter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div class="max-w-md mx-auto mt-10 space-y-5">
      <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div id="value1" class="text-2xl font-semibold">
          {count}
        </div>
        <div class="flex space-x-3">
          <button
            onClick={() => dispatch(increment(5))}
            class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement(3))}
            class="bg-red-400 text-white px-3 py-2 rounded shadow"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default HooksCounter;
