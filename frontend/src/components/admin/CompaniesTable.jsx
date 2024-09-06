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

const CompaniesTable = () => {
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
  const navigate = useNavigate();
  const { companies, searchCompanyByText } = useSelector(
    (store) => store.company
  );
  const [filterCompany, setFilterCompany] = useState(companies);
  useEffect(() => {
    const filteredCompany = companies.filter((company) => {
      if (!searchCompanyByText || searchCompanyByText.trim() === "") {
        return true; // Show all companies when input is cleared
      }
      return company.name
        .toLowerCase()
        .includes(searchCompanyByText.toLowerCase());
    });
    setFilterCompany(filteredCompany);
  }, [companies, searchCompanyByText]);
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full">
        <TableCaption className="text-gray-600">
          List of your recently registered companies
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterCompany.length <= 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No companies found
              </TableCell>
            </TableRow>
          ) : (
            filterCompany.map((company) => (
              <TableRow key={company._id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage
                      src={company.logo || "/default-logo.png"}
                      alt={`${company.name} logo`}
                    />
                  </Avatar>
                </TableCell>
                <TableCell>
                  <p className="text-gray-700">{company.name}</p>
                </TableCell>
                <TableCell>
                  <p className="text-gray-500">
                    {formatDateCustom(company.createdAt)}
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

export default CompaniesTable;
