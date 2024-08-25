import React from "react";
import LatestJobCart from "./LatestJobCart";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-indigo-600">Latest and Top</span> Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {randomJobs.slice(0, 6).map((item, index) => (
          <LatestJobCart />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
