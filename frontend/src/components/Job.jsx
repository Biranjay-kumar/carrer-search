import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="p-6 rounded-lg shadow-lg bg-white border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark className="text-gray-700" />
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <Avatar className="flex-shrink-0">
          <AvatarImage
            src="/carrer-logo.webp"
            alt="Company Logo"
            className="h-10 w-10 rounded-full"
          />
        </Avatar>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Company Name</h2>
          <p className="text-sm text-gray-600">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold">Title</h1>
        <p>
          InnovateTech Solutions is a leading technology company specializing in
          cutting-edge software development and IT services.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge
          className="bg-blue-500 text-white font-bold py-1 px-3 rounded-md"
          variant="ghost"
        >
          12 Positions
        </Badge>
        <Badge
          className="bg-blue-500 text-white font-bold py-1 px-3 rounded-md"
          variant="ghost"
        >
          Part Time
        </Badge>
        <Badge
          className="bg-blue-500 text-white font-bold py-1 px-3 rounded-md"
          variant="ghost"
        >
          12 LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline">Details</Button>
        <Button className="bg-indigo-500">Save for Later</Button>
      </div>
    </div>
  );
};

export default Job;
