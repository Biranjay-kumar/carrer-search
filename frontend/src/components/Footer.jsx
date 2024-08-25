import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo or Company Name */}
        <div className="text-2xl font-semibold mb-4 md:mb-0">
          <a href="#" className="text-white hover:text-gray-400">CareerSearch</a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row mb-4 md:mb-0">
          <a href="#" className="mx-2 hover:text-gray-400">Home</a>
          <a href="#" className="mx-2 hover:text-gray-400">About</a>
          <a href="#" className="mx-2 hover:text-gray-400">Services</a>
          <a href="#" className="mx-2 hover:text-gray-400">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-center text-gray-400 mt-4">
        <p>Khelgaon housing sector 1, Ranchi, India</p>
        <p>Email: contact@careersearch.com | Phone: +91 8789082373</p>
      </div>

      {/* Copyright Notice */}
      <div className="text-center text-gray-500 mt-4">
        <p>&copy; {new Date().getFullYear()} CareerSearch. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
