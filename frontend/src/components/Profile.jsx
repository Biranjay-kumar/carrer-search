import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDilog from "./UpdateProfileDilog";

const skills = ["Frontend", "Backend", "Fullstack", "Datascience"];
const isResume = true;

const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl bg-white rounded-xl shadow-lg my-10 p-8 mx-auto">
        <div className="flex justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <Avatar className="cursor-pointer w-24 h-24">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="rounded-full border-2 border-gray-300"
              />
            </Avatar>
            <div className="flex flex-col">
              <h1 className="font-semibold text-2xl text-gray-800">
                Full Name
              </h1>
              <p className="text-gray-600 mb-2">Add your bio here</p>
              <div className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-2" />
                <span>birnajaykumar@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-600 mt-2">
                <Contact className="w-5 h-5 mr-2" />
                <span>+91 9876543210</span>
              </div>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            variant="outline"
            className="flex items-center gap-2 border-green-500 text-green-500 hover:bg-green-100"
          >
            <Pen className="w-4 h-4" />
            Update
          </Button>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills</h2>
          <div className="flex gap-2">
            {skills.length !== 0 ? (
              skills.map((item, index) => (
                <Badge
                  key={index}
                  className="bg-green-500 text-white px-3 py-1 rounded-full"
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span>N/A</span>
            )}
          </div>

          <div className="grid w-full max-w-sm items-center gap-1 mt-6">
            <Label className="text-md font-bold">Resume</Label>
            {isResume ? (
              <a
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1XDfwY4hV4X48_9pPDPNxHfRC_xDzgYMI/view"
              >
                Biranjay Resume
              </a>
            ) : (
              <span>N/A</span>
            )}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Applied Jobs
            </h2>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <AppliedJobTable />
            </div>
            <UpdateProfileDilog open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
