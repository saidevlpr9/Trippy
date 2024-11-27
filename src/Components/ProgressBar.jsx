import React from "react";

export function ProgressBar() {
  return (
    <div className="w-full max-w-md bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
      <div className="bg-gradient-to-r from-black to-[#017434] h-2.5 rounded-full w-[70%] animate-pulse"></div>
    </div>
  );
}
