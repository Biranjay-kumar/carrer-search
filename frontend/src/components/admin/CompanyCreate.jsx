import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";

const CompanyCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState();
  const registerNewCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { companyName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));

        toast.success(res.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <Navbar />
      <div className="flex flex-col justify-center items-center flex-1">
        <div className="max-w-4xl w-full bg-white p-10 rounded-xl shadow-xl">
          <div className="mb-8 text-center">
            <h1 className="font-bold text-4xl text-blue-700">
              Create Your Company
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Let’s get started by naming your company. You can always change it
              later.
            </p>
          </div>

          <div className="mb-6">
            <Label className="block text-gray-700 font-medium text-lg mb-2">
              Company Name
            </Label>
            <Input
              type="text"
              className="p-4 border border-gray-300 rounded-lg w-full text-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your company name"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <Button
              variant="outline"
              className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-all duration-300"
              onClick={() => navigate("/admin/companies")}
            >
              Cancel
            </Button>
            <Button
              onClick={registerNewCompany}
              className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;
