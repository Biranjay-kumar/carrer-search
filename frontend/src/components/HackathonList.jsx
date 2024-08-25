import React from "react";
import { Link } from "react-router-dom";
import { hackathonData } from "@/utils/hakathonsData";

const HackathonList = () => {
  return (
    <div className="bg-indigo-200 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-600 mb-12 text-center">
          Upcoming Hackathons
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Object.keys(hackathonData).map((id) => {
            const { title, date, duration, location } = hackathonData[id];
            return (
              <div
                key={id}
                className="bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <h2 className="text-3xl font-bold text-white mb-3">{title}</h2>
                <p className="text-white mb-1">
                  <strong>Date:</strong> {date}
                </p>
                <p className="text-white mb-1">
                  <strong>Duration:</strong> {duration}
                </p>
                <p className="text-white mb-4">
                  <strong>Location:</strong> {location}
                </p>
                <Link
                  to={`/hackathon/${id}`}
                  className="inline-block px-6 py-2 text-white bg-yellow-400 rounded-md hover:bg-yellow-500 transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HackathonList;
