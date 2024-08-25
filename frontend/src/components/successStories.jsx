import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
// import {
//
// } from "../ui/carousel";

const SuccessStories = () => {
  const testimonials = [
    {
      name: "Mayank Pathak",
      title: "Software Engineer",
      company: "Google",
      story:
        "I found my dream job at Google within a week of signing up! The process was smooth and the opportunities were abundant.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Mrinmoy",
      title: "AI Engineer",
      company: "Microsoft",
      story:
        "The platform provided me with all the resources I needed to prepare for interviews and secure a position as a Marketing Manager.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Aditya Kumar",
      title: "Data Scientist",
      company: "Adobe",
      story:
        "Thanks to the personalized job recommendations, I landed a Data Scientist role that perfectly matches my skills.",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Success Stories
        </h2>
        <Carousel>
          <CarouselContent className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-700">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500">
                  {testimonial.title} at {testimonial.company}
                </p>
                <p className="mt-4 text-gray-600">{testimonial.story}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="mr-4">Previous</CarouselPrevious>
            <CarouselNext>Next</CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default SuccessStories;
