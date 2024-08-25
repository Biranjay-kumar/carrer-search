import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const JobDescription = () => {
  const isApplied = true;

  return (
    <div className="max-w-6xl mx-auto my-10 p-8 bg-white rounded-lg shadow-lg relative">
      <Link
        to="/jobs"
        className="absolute top-4 left-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 transition-all"
      >
        <IoArrowBack size={24} />
      </Link>
      <h1 className="font-bold text-3xl text-gray-800 mb-6 text-center">
        Frontend Developer
      </h1>
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-blue-600 text-white font-semibold py-1 px-4 rounded-md">
            12 Positions
          </Badge>
          <Badge className="bg-blue-600 text-white font-semibold py-1 px-4 rounded-md">
            Part-Time
          </Badge>
          <Badge className="bg-blue-600 text-white font-semibold py-1 px-4 rounded-md">
            12 LPA
          </Badge>
        </div>
        <Button
          disabled={isApplied}
          className={`text-white font-semibold py-2 px-6 rounded-md transition-all ${
            isApplied
              ? "bg-red-500 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isApplied ? "Applied" : "Apply"}
        </Button>
      </div>
      <h2 className="border-b-2 border-gray-300 font-medium text-xl pb-4 mb-6">
        Job Description
      </h2>
      <div className="space-y-4">
        <div className="flex">
          <h3 className="font-bold">Role:</h3>
          <span className="pl-4">Frontend Developer</span>
        </div>
        <div className="flex">
          <h3 className="font-bold">Location:</h3>
          <span className="pl-4">Remote</span>
        </div>
        <div className="flex">
          <h3 className="font-bold">Description:</h3>
          <span className="pl-4">
            We are looking for a skilled Frontend Developer to join our team.
          </span>
        </div>
        <div className="flex">
          <h3 className="font-bold">Experience:</h3>
          <span className="pl-4">3+ Years</span>
        </div>
        <div className="flex">
          <h3 className="font-bold">Salary:</h3>
          <span className="pl-4">4 LPA</span>
        </div>
        <div className="flex">
          <h3 className="font-bold">Total Applications:</h3>
          <span className="pl-4">120</span>
        </div>
        <div className="flex">
          <h3 className="font-bold">Posted Date:</h3>
          <span className="pl-4">August 26, 2024</span>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
