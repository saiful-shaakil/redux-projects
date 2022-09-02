import React from "react";

export default function Tag({ title }) {
  return (
    <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
      {title}
    </div>
  );
}
