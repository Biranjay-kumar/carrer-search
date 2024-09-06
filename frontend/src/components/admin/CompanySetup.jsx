import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { ArrowLeft, Loader } from "lucide-react"; // Assuming Loader is available from lucide-react
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import useGetCompanyById from "@/hooks/useGetCompanyById";

const CompanySetup = () => {
  const params = useParams();
  useGetCompanyById(params.id)
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });
  const { singleCompany } = useSelector((store) => store.company);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Handle file changes
  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();

    // Create FormData instance
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);

    if (input.file) {
      formData.append("file", input.file); // Append the file if it exists
    }

    try {
      setLoading(true); // Start loading state
      const res = await axios.put(
        `${COMPANY_API_END_POINT}/update/${params.id}`,
        formData,
        {
          headers: {
            // Let the browser set the proper Content-Type for FormData
          },
          withCredentials: true, // Ensure cookies or tokens are sent
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/companies"); // Navigate to companies list
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false); // End loading state
    }
  };

  useEffect(() => {
    setInput({
      name: singleCompany.name || "N/A",
      description: singleCompany.description || "N/A",
      website: singleCompany.website || "N/A",
      location: singleCompany.location || "N/A",
      file: singleCompany.file || null,
    });
  }, [singleCompany]);

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto my-10 bg-white shadow-md rounded-lg p-6">
        <form onSubmit={submitHandler}>
          <div className="flex items-center gap-5 mb-8">
            <Button
              className="flex items-center gap-2 text-gray-500 font-semibold"
              variant="outline"
              onClick={() => window.history.back()}
            >
              <ArrowLeft />
            </Button>
            <h1 className="font-bold text-2xl text-gray-700">
              Enterprise Creation
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Company Name Input */}
            <div>
              <Label className="text-gray-600">Company Name</Label>
              <Input
                type="text"
                name="name"
                placeholder="Enter your company name"
                value={input.name}
                onChange={changeEventHandler}
                className="mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>

            {/* Description Input */}
            <div>
              <Label className="text-gray-600">Description</Label>
              <Input
                type="text"
                name="description"
                placeholder="Short description"
                value={input.description}
                onChange={changeEventHandler}
                className="mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>

            {/* Website Input */}
            <div>
              <Label className="text-gray-600">Website</Label>
              <Input
                type="text"
                name="website"
                placeholder="Company website URL"
                value={input.website}
                onChange={changeEventHandler}
                className="mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>

            {/* Location Input */}
            <div>
              <Label className="text-gray-600">Location</Label>
              <Input
                type="text"
                name="location"
                placeholder="Company location"
                value={input.location}
                onChange={changeEventHandler}
                className="mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>

            {/* Logo Upload */}
            <div>
              <Label className="text-gray-600">Logo</Label>
              <Input
                type="file"
                name="file"
                accept="image/*"
                onChange={changeFileHandler}
                className="mt-1 p-3 border rounded-md focus:outline-none"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              className="text-gray-700 border-gray-300 hover:bg-gray-100"
              onClick={() => window.history.back()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 flex items-center gap-2"
              disabled={loading} // Disable button during loading
            >
              {loading ? <Loader className="animate-spin" size={16} /> : null}
              {loading ? "Updating..." : "Update"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;
