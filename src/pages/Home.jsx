import { useState } from "react";



import Hero from "../components/Hero";

import Categories from "../components/Categories";
import Companies from "../components/Companies";
import Testimonials from "../components/Testimonial";
import FeaturedCompanies from "../components/FeaturedCompanies";

const Home = () => {
  const [showTour, setShowTour] = useState(true);

  return (
    <>
      <Hero />
      <Categories />
      <Companies />
      <FeaturedCompanies />
      <Testimonials />
    </>
  );
};

export default Home;