import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const companyArray = [];

const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });

  const { companies } = useSelector((store) => store.company);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar />
      <div className="flex justify-center items-center py-10 shadow-xl">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
            Post a New Job
          </h1>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="md:col-span-2">
              <Label htmlFor="title">Job Title</Label>
              <Input
                type="text"
                name="title"
                value={input.title}
                onChange={changeEventHandler}
                placeholder="Enter job title"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 mt-2 w-full"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <Label htmlFor="description">Job Description</Label>
              <textarea
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                placeholder="Describe the job responsibilities"
                rows="4"
                className="border border-gray-300 rounded-lg p-2 mt-2 w-full"
              />
            </div>

            {/* Requirements */}
            <div>
              <Label htmlFor="requirements">Requirements</Label>
              <Input
                type="text"
                name="requirements"
                value={input.requirements}
                onChange={changeEventHandler}
                placeholder="Skills or qualifications"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 mt-2 w-full"
              />
            </div>

            {/* Salary */}
            <div>
              <Label htmlFor="salary">Salary</Label>
              <Input
                type="text"
                name="salary"
                value={input.salary}
                onChange={changeEventHandler}
                placeholder="e.g., $5000 - $7000"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 mt-2 w-full"
              />
            </div>

            {/* Location */}
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
                placeholder="Job location"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 mt-2 w-full"
              />
            </div>

            {/* Job Type */}
            <div>
              <Label htmlFor="jobType">Job Type</Label>
              <Input
                type="text"
                name="jobType"
                value={input.jobType}
                onChange={changeEventHandler}
                className="border border-gray-300 rounded-lg mt-2 w-full p-2"
              />
            </div>

            {/* Experience */}
            <div>
              <Label htmlFor="experience">Experience Level</Label>
              <Input
                type="text"
                name="experience"
                value={input.experience}
                onChange={changeEventHandler}
                className="border border-gray-300 rounded-lg mt-2 w-full p-2"
              />
            </div>

            {/* Number of Positions */}
            <div>
              <Label htmlFor="position">Number of Position</Label>
              <Input
                type="number"
                name="position"
                value={input.position}
                onChange={changeEventHandler}
                className="border border-gray-300 rounded-lg mt-2 w-full p-2"
              />
            </div>
            {companies.length > 0 ? (
              <Select
                onValueChange={(value) =>
                  setInput({ ...input, companyId: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {companies.map((company) => (
                      <SelectItem key={company._id} value={company._id}>
                        {company.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            ) : (
              <p className="text-xs text-red-300 text-center font-bold my-3">
                Please register a company first before posting a job
              </p>
            )}
          </form>

          <button
            onClick={() => setLoading(true)}
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            {loading ? "Submitting..." : "Post Job"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
