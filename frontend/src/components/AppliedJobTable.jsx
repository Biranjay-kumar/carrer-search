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
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const statusColor = (status) => {
    switch (status) {
      case "accepted":
        return "bg-green-500 text-white";
      case "rejected":
        return "bg-red-500 text-white";
      case "pending":
        return "bg-yellow-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const { allAppliedJobs } = useSelector((store) => store.job);
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
          {allAppliedJobs.length <= 0 ? (
            <span>N/A</span>
          ) : (
            allAppliedJobs.map((appliedJob) => (
              <TableRow
                key={appliedJob?._id}
                className="hover:bg-gray-200 transition-colors duration-150"
              >
                <TableCell>{appliedJob?.createdAt.split("T")[0]}</TableCell>
                <TableCell>{appliedJob?.job?.title}</TableCell>
                <TableCell>{appliedJob?.job?.company?.name}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    className={`px-2 py-1 rounded-full ${statusColor(
                      appliedJob.status
                    )}`}
                  >
                    {appliedJob?.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
