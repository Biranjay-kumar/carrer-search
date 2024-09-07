import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai", "remote"],
  },
  {
    filterType: "Industry",
    array: ["Frontend", "Backend", "Full Stack", "Next.js", "Angular"],
  },
  {
    filterType: "Salary",
    array: [
      "0-40K",
      "42K-1 Lakh",
      "Negotiable",
      "Performance Based",
      "3-5 LPA*",
    ],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();
  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]); // Added selectedValue to the dependency array

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">Filter Jobs</h1>
      <hr className="border-t border-gray-300 mb-6" />

      {filterData.map((data, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">
            {data.filterType}
          </h3>
          <RadioGroup
            value={selectedValue}
            onValueChange={changeHandler} // Ensure this is correctly handled in RadioGroup
            className="space-y-2"
          >
            {data.array.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <RadioGroupItem
                  value={item}
                  id={`${data.filterType}-${idx}`}
                  className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <Label
                  htmlFor={`${data.filterType}-${idx}`}
                  className="text-gray-700 cursor-pointer"
                >
                  {item}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      ))}
    </div>
  );
};

export default FilterCard;
