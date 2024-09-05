import { useSelector } from "react-redux";
import CareerAdviceBlog from "./components/CarrerAdvise";
import CategoryCarousel from "./components/CategoryCarousel";
import FAQPage from "./components/FAQPage";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LatestJobs from "./components/LatestJobs";
import Navbar from "./components/shared/Navbar";
import SuccessStories from "./components/successStories";
import useGetAllJobs from "./hooks/useGetAllJobs";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);

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
