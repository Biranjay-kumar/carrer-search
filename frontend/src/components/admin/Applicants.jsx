import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import ApplicantsTable from "./ApplicantsTable";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setAllApplicants } from "@/redux/applicationSlice";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constant";

const Applicants = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { applicants } = useSelector((store) => store.application);
  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_END_POINT}/${params.id}/applicants`,
          {
            withCredentials: true,
          }
        );

        dispatch(setAllApplicants(res.data.job)); 
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch applicants. Please try again."); 
      }
    };
    fetchAllApplicants();
  }, [params.id, dispatch]); // added dependencies to useEffect

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Applicants ({applicants?.applications?.length})
        </h1>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <ApplicantsTable />
        </div>
      </div>
    </div>
  );
};

export default Applicants;
