import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/Searchbar";
import Categories from "../components/Categories";
import Companies from "../components/Companies";
import Testimonials from "../components/Testimonial";
import FeaturedCompanies from "../components/FeaturedCompanies";

const Home = () => {
  return (
    <>
    
      <Navbar />
      <Hero />
      <Categories />
      <Companies />
      <FeaturedCompanies />
      <Testimonials />
    </>
  );
};

export default Home;