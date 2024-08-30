import React, { useState } from "react";
import axios from "axios";
import { RiStarSFill } from "react-icons/ri";

const FeedbackForm = () => {
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // Assumes the token is stored in localStorage
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await axios.post(
        "/api/feedback",
        { description, rating },
        config
      );
      console.log("Feedback submitted:", response.data);
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Submit Your Feedback
        </h2>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Share your experience..."
          />
        </div>
        <div className="form-group mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Rating:
          </label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <RiStarSFill
                key={star}
                onClick={() => setRating(star)}
                size={30}
                className={`cursor-pointer ${
                  rating >= star ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
