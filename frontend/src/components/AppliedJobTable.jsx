import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

const AppliedJobTable = () => {
  const jobs = [
    {
      date: "26-08-2024",
      job: "Software Engineer",
      company: "Google",
      status: "Selected",
    },
    {
      date: "22-08-2024",
      job: "Backend Developer",
      company: "Amazon",
      status: "Interview",
    },
    {
      date: "20-08-2024",
      job: "Frontend Developer",
      company: "Facebook",
      status: "Rejected",
    },
    {
      date: "18-08-2024",
      job: "Full Stack Developer",
      company: "Apple",
      status: "Pending",
    },
  ];

  const statusColor = (status) => {
    switch (status) {
      case "Selected":
        return "bg-green-500 text-white";
      case "Interview":
        return "bg-blue-500 text-white";
      case "Rejected":
        return "bg-red-500 text-white";
      case "Pending":
        return "bg-yellow-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
      <Table>
        <TableCaption className="text-lg font-semibold">
          A list of Applied Jobs
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Date</TableHead>
            <TableHead className="text-left">Job</TableHead>
            <TableHead className="text-left">Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job, index) => (
            <TableRow
              key={index}
              className="hover:bg-gray-200 transition-colors duration-150"
            >
              <TableCell>{job.date}</TableCell>
              <TableCell>{job.job}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell className="text-right">
                <Badge
                  className={`px-2 py-1 rounded-full ${statusColor(
                    job.status
                  )}`}
                >
                  {job.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
