import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobsTable = () => {
  const formatDateCustom = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid date";

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept.",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };
  const { companies, searchCompanyByText } = useSelector(
    (store) => store.company
  );
  const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allAdminJobs);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredJobs = allAdminJobs.filter((job) => {
      if (!searchJobByText || searchJobByText.trim() === "") {
        return true; // Show all companies when input is cleared
      }
      return job?.title
        .toLowerCase()
        .includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase())
    });

    setFilterJobs(filteredJobs);
  }, [allAdminJobs, searchJobByText]);
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full">
        <TableCaption className="text-gray-600">
          List of your recently posted jobs
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterJobs.length <= 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No Job found
              </TableCell>
            </TableRow>
          ) : (
            filterJobs.map((job) => (
              <TableRow key={job._id}>
                <TableCell>
                  <p className="text-gray-700">{job?.company?.name}</p>
                </TableCell>
                <TableCell>
                  <p className="text-gray-700">{job?.title}</p>
                </TableCell>
                <TableCell>
                  <p className="text-gray-500">
                    {formatDateCustom(job.createdAt)}
                  </p>
                </TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger className="inline-flex">
                      <MoreHorizontal className="cursor-pointer hover:text-gray-600" />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      <div
                        onClick={() =>
                          navigate(`/admin/companies/${company._id}`)
                        }
                        className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                      >
                        <Edit2 className="w-4" />
                        <span>Edit</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;
