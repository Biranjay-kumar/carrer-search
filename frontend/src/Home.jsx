import { useEffect } from "react";
import CareerAdviceBlog from "./components/CarrerAdvise";
import CategoryCarousel from "./components/CategoryCarousel";
import FAQPage from "./components/FAQPage";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LatestJobs from "./components/LatestJobs";
import Navbar from "./components/shared/Navbar";
import SuccessStories from "./components/successStories";
import useGetAllJobs from "./hooks/useGetAllJobs";
import axios from 'axios';
const Home = () => {
  const callApi = async () => {
    const data = await axios.get(
      "https://d3qhqrhe9asm02.cloudfront.net/api/brand/fetch/user"
    );
    console.log(data);
    
  };

  useEffect(() => {
    callApi();
  }, []);
  useGetAllJobs();
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <SuccessStories />
      <CareerAdviceBlog />
      <FAQPage />
      <Footer />
    </div>
  );
};

export default Home;
