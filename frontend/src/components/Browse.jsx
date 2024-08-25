import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const Browse = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Search Results ({randomJobs.length})
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {randomJobs.map((job, index) => (
            <Job key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
