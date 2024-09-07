import React from "react";
import LatestJobCart from "./LatestJobCart";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-indigo-600">Latest and Top</span> Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length === 0 ? <span>N/A</span>:allJobs.slice(0, 6).map((job) => (
          <LatestJobCart key={job._id} job={job}/>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
