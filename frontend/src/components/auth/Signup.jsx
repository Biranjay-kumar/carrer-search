import React from "react";
import Navbar from "../shared/Navbar";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const navigate = useNavigate();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-full md:w-1/2 lg:w-1/3 bg-white shadow-md rounded-lg p-8 my-10"
        >
          <h1 className="font-extrabold text-2xl text-gray-800 mb-6 text-center">
            Sign Up
          </h1>

          <div className="my-4 flex flex-col">
            <Label className="text-sm font-medium text-gray-700 mb-1">
              Full Name
            </Label>
            <input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              required
              placeholder="Enter your full name"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="my-4 flex flex-col">
            <Label className="text-sm font-medium text-gray-700 mb-1">
              Email
            </Label>
            <input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              required
              placeholder="Enter your email"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="my-4 flex flex-col">
            <Label className="text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </Label>
            <input
              type="number"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              required
              placeholder="8789082373"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative my-4 flex flex-col">
            <Label className="text-sm font-medium text-gray-700 mb-1">
              Password
            </Label>
            <input
              type={showPassword ? "text" : "password"}
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              required
              placeholder="Enter your password"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <EyeOffIcon className="h-5 w-5 mt-[100%]" />
              ) : (
                <EyeIcon className="h-5 w-5 mt-[100%]" />
              )}
            </button>
          </div>
          <RadioGroup className=" flex items-center gap-4 my-5 justify-center">
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="student"
                checked={input.role === "student"}
                onChange={changeEventHandler}
                className="cursor-pointer"
              />
              <Label htmlFor="r1">Student</Label>
            </div>
            <div className="flex items-center space-x-2 ">
              <Input
                type="radio"
                name="role"
                value="recruiter"
                checked={input.role === "recruiter"}
                onChange={changeEventHandler}
                className="cursor-pointer"
              />
              <Label htmlFor="r2">Recruiter</Label>
            </div>
          </RadioGroup>
          <div>
            <Label>Profile photo</Label>
            <Input
              accept="image/*"
              type="file"
              // required
              onChange={changeFileHandler}
              className="cursor-pointer"
            ></Input>
          </div>
          <button className="w-full bg-blue-600 text-white font-semibold py-2 mt-6 rounded-md hover:bg-blue-700 transition-colors">
            Sign Up
          </button>
          <span className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-sky-600 underline ">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
