import React from "react";
import { useParams } from "react-router-dom";
// import { Button } from "./ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import { hackathonData } from "@/utils/hakathonsData"; // Import the data from the file
import { Button } from "./ui/button";

const HackathonPage = () => {
  const { id } = useParams();
  const hackathon = hackathonData[id];

  if (!hackathon) {
    return <div className="text-center p-12">Hackathon not found</div>;
  }

  return (
    <div className="bg-gradient-to-r from-green-100 to-green-200 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-700 mb-4">
            {hackathon.title}
          </h1>
          <p className="text-xl text-gray-700">{hackathon.overview}</p>
        </div>

        <div className="flex flex-col md:flex-row justify-around mb-12">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <Calendar className="text-green-700 h-8 w-8" />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Date</h3>
              <p className="text-gray-600">{hackathon.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <Clock className="text-green-700 h-8 w-8" />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Duration</h3>
              <p className="text-gray-600">{hackathon.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-green-700 h-8 w-8" />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Location</h3>
              <p className="text-gray-600">{hackathon.location}</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-3 rounded-full">
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HackathonPage;
