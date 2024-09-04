import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { IoArrowBack } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { setSingleJob } from "@/redux/jobSlice";
import { JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const JobDescription = () => {
  const [isApplied, setIsApplied] = useState(false); // Handle applied state
  const params = useParams();
  const jobId = params.id;
  const { singleJob } = useSelector((store) => store.job);

  const dispatch = useDispatch();
const user = useSelector(store=>store.auth)
  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          // Assume `isApplied` is returned from the API as part of job data
          setIsApplied(res.data.jobs.isApplied);
        }
      } catch (error) {
        console.error("Error fetching job:", error);
        // Optionally handle error state here, e.g., setError(true);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user._id]);

  return (
    <div className="max-w-6xl mx-auto my-10 p-8 bg-white rounded-lg shadow-lg relative">
      <Link
        to="/jobs"
        className="absolute top-4 left-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 transition-all"
      >
        <IoArrowBack size={24} />
      </Link>
      <h1 className="font-bold text-3xl text-gray-800 mb-6 text-center">
        {singleJob?.title || "Job Title"}
      </h1>
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-blue-600 text-white font-semibold py-1 px-4 rounded-md">
            {singleJob?.position || "N/A"} Position
            {singleJob?.position > 1 ? "s" : ""}
          </Badge>
          <Badge className="bg-blue-600 text-white font-semibold py-1 px-4 rounded-md">
            {singleJob?.type || "Job Type"}
          </Badge>
          <Badge className="bg-blue-600 text-white font-semibold py-1 px-4 rounded-md">
            {singleJob?.salary || "N/A"}
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
          <span className="pl-4">{singleJob?.title || "N/A"}</span>
        </div>
        <div className="flex">
          <h3 className="font-bold">Location:</h3>
          <span className="pl-4">{singleJob?.location || "N/A"}</span>
        </div>
        <div className="flex">
          <h3 className="font-bold">Description:</h3>
          <span className="pl-4">
            {singleJob?.description || "No description provided."}
          </span>
        </div>
        <div className="flex">
          <h3 className="font-bold">Experience:</h3>
          <span className="pl-4">{singleJob?.experienceLevel || "N/A"}</span>
        </div>
        <div className="flex">
          <h3 className="font-bold">Salary:</h3>
          <span className="pl-4">{singleJob?.salary || "N/A"}</span>
        </div>
        <div className="flex">
          <h3 className="font-bold">Total Applications:</h3>
          <span className="pl-4">{singleJob?.applications || "N/A"}</span>
        </div>
        <div className="flex">
          <h3 className="font-bold">Posted Date:</h3>
          <span className="pl-4">{singleJob?.postedDate || "N/A"}</span>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
