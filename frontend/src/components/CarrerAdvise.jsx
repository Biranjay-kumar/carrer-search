import React from "react";

const articles = [
  {
    title: "How to Build a Standout Resume",
    excerpt:
      "Learn the key elements of creating a resume that catches the eye of recruiters and lands you interviews.",
    imageUrl: "https://via.placeholder.com/400x200",
    link: "#",
  },
  {
    title: "Ace Your Next Job Interview",
    excerpt:
      "Tips and strategies to help you prepare for and excel in your next job interview.",
    imageUrl: "https://via.placeholder.com/400x200",
    link: "#",
  },
  {
    title: "Top Skills in Demand for 2024",
    excerpt:
      "Stay ahead of the curve by learning about the skills that will be in high demand in the coming year.",
    imageUrl: "https://via.placeholder.com/400x200",
    link: "#",
  },
];

const CareerAdviceBlog = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Career Advice & Resources
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Get the latest tips, guides, and resources to help you in your job
            search and career growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <a
                  href={article.link}
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerAdviceBlog;
