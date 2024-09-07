import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";

const shortListingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);

  const statusHandler = async (status, id) => {
    try {
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status },
        { withCredentials: true }
      );
      if(res.data.success){
        toast.success(res.data.message)
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message)
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Table>
        <TableCaption className="text-sm font-semibold text-gray-400">
          A List of Your Recent Applied Users
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100 text-gray-700">
            <TableHead className="py-3 px-4 text-left">Name</TableHead>
            <TableHead className="py-3 px-4 text-left">Email</TableHead>
            <TableHead className="py-3 px-4 text-left">Contact</TableHead>
            <TableHead className="py-3 px-4 text-left">Resume</TableHead>
            <TableHead className="py-3 px-4 text-left">Date</TableHead>
            <TableHead className="py-3 px-4 text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants &&
            applicants?.applications?.map((item) => (
              <TableRow className="border-b border-gray-200" key={item._id}>
                <TableCell className="py-3 px-4">
                  {item?.applicant?.fullname}
                </TableCell>
                <TableCell className="py-3 px-4">
                  {item?.applicant?.email}
                </TableCell>
                <TableCell className="py-3 px-4">
                  {item?.applicant?.phoneNumber}
                </TableCell>
                <TableCell className="py-3 px-4">
                  <a
                    href="/resume-link"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                  >
                    {item?.applicant?.profile?.resumeOriginalName || "N/A"}
                  </a>
                </TableCell>
                <TableCell className="py-3 px-4">
                  {item?.applicant?.createdAt.split("T")[0]}
                </TableCell>
                <TableCell className="py-3 px-4 text-right">
                  <Popover>
                    <PopoverTrigger aria-label="More options">
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="bg-white p-4 rounded-md shadow-md w-32">
                      {shortListingStatus.map((status, index) => (
                        <div
                        onClick={()=>statusHandler(status, item._id)}
                          key={index}
                          className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                        >
                          <span>{status}</span>
                        </div>
                      ))}
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}

          {/* Add more rows as needed */}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
