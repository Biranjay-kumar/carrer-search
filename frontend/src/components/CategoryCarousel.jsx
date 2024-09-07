import { categories } from "@/utils/constant";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 py-6">
      <Carousel className="w-full max-w-xl mx-auto">
        <CarouselContent className="flex space-x-2">
          {categories.map((cat, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 flex justify-center"
            >
              <Button
                onClick={() => searchJobHandler(cat)}
                className="bg-white text-indigo-700 hover:bg-indigo-700 hover:text-white transition-all duration-300 shadow-md py-2 px-4 rounded-lg"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-1 top-1/2 transform -translate-y-1/2 text-slate-500">
          ❮
        </CarouselPrevious>
        <CarouselNext className="absolute right-1 top-1/2 transform -translate-y-1/2 text-slate-500">
          ❯
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
