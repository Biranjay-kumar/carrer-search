import React from "react";
import Navbar from "../shared/Navbar";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import store from "@/redux/store";
import { Button } from "../ui/button";
import { Loader, Loader2 } from "lucide-react";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto mt-[5%]">
        <form
          onSubmit={submitHandler}
          className="w-full md:w-1/2 lg:w-1/3 bg-white shadow-md rounded-lg p-8 my-10"
        >
          <h1 className="font-extrabold text-2xl text-gray-800 mb-6 text-center">
            Login
          </h1>
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
                checked={input.role === "recruiter"}
                onChange={changeEventHandler}
                className="cursor-pointer"
              />
              <Label htmlFor="r2">Recruiter</Label>
            </div>
          </RadioGroup>
          {loading ? (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 mt-6 rounded-md hover:bg-blue-700 transition-colors"
            >
              Login
            </Button>
          )}
          <span className="text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-sky-600 underline">
              Register
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
