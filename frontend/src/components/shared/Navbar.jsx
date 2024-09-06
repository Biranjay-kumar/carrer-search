import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  // const user = false;
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        <div>
          <h1 className="text-4xl font-semibold text-gray-800">
            <Link to="/">
            <span className="text-blue-600">Career</span>
            <span className="text-purple-600">Search</span>
            </Link>
          </h1>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex gap-6 items-center font-medium text-gray-700">
            {user && user?.role === "recruiter" ? (
              <>
                <li>
                  <Link
                    to="/admin/companies"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Companies
                  </Link>
                </li>
                <li>
                  <Link
                    to="admin/jobs"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/browse"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Browse
                  </Link>
                </li>
              </>
            )}
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="hover:bg-[#142155] hover:text-white"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#364ca5] hover:bg-[#142155]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer shadow-lg">
                  <AvatarImage
                    height={32}
                    width={32}
                    src={user?.profile?.profilePhoto}
                    alt="@shadcn"
                    className="rounded-full"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-64 bg-white shadow-lg rounded-lg p-4 mt-3 items-center text-sm">
                <div className="flex items-center gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {user?.fullname}
                    </h4>
                    {/* <p className="text-gray-600">You are a good boy</p> */}
                  </div>
                </div>
                <div className="flex flex-col">
                  {user && user.role === "student" && (
                    <div className="flex items-center">
                      <User2 />
                      <Button variant="link">
                        <Link to="/profile">View Profile</Link>
                      </Button>
                    </div>
                  )}

                  <div className="-mt-2 flex items-center">
                    <LogOut />
                    <Button onClick={logoutHandler} variant="link">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
