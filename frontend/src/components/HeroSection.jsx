import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center gap-2 bg-gradient-to-r from-indigo-100 to-indigo-200 shadow-md py-12">
      {/* Seize New Opportunities Link */}
      <motion.span
        className="px-4 py-2 rounded-full text-[#a92c2c] font-medium bg-white shadow-lg inline-block mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Link
          to="/jobs"
          className="inline-block transform transition-transform duration-300 hover:scale-105 hover:text-blue-500 text-blue-700"
        >
          Seize New Opportunities
        </Link>
      </motion.span>

      {/* Hackathon Link */}
      <motion.span
        className="px-4 py-2 rounded-full text-[#2ca92c] font-medium bg-white shadow-lg inline-block mb-4 ml-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Link
          to="/hackathon"
          className="inline-block transform transition-transform duration-300 hover:scale-105 hover:text-green-500 text-green-700"
        >
          Join Our Hackathon
        </Link>
      </motion.span>

      {/* Main Heading */}
      <motion.h1
        className="text-4xl font-bold leading-tight text-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
      >
        Discover, Pursue, &<br />
        <motion.span
          className="text-indigo-600"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.1 }}
          transition={{
            duration: 0.6,
            yoyo: Infinity,
            ease: "easeInOut",
          }}
        >
          Land Your Dream Career
        </motion.span>
      </motion.h1>

      {/* Search Bar */}
      <div className="flex w-[40%] shadow-lg border border-indigo-300 pl-4 bg-white rounded-md items-center gap-2 mx-auto">
        <input
          type="text"
          placeholder="Find your dream job"
          className="outline-none border-none w-full text-indigo-900 placeholder-indigo-300"
        />
        <Button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-md p-2">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
