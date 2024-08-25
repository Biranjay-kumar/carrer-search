import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCart = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto my-4">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          {/* Replace with a company logo if available */}
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold text-xl">
            CN
          </div>
        </div>
        <div className="ml-4">
          <h1 className="text-2xl font-semibold text-gray-800">Company Name</h1>
          <p className="text-gray-600 text-sm">India</p>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Job Title</h2>
        <p className="text-gray-600">Software Developer</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge
          className="bg-blue-500 text-white font-bold py-1 px-3 rounded-md"
          variant="ghost"
        >
          12 Positions
        </Badge>
        <Badge
          className="bg-blue-500 text-white font-bold py-1 px-3 rounded-md"
          variant="ghost"
        >
          Part Time
        </Badge>
        <Badge
          className="bg-blue-500 text-white font-bold py-1 px-3 rounded-md"
          variant="ghost"
        >
          12 LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCart;
