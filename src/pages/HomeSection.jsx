import React from "react";

import HeroSection from "../Components/HeroSection";
import BestSeller from "./BestSeller";
import LuxuryCollections from "./LuxuryCollections";
import StylesCollections from "./StlyesCollection";
import Testimonials from "./Testimonials";
import Footer from "../Components/Footer";

const HomeSection = () => {
  return (
    <>
      
      <HeroSection />
      <BestSeller/>
      <LuxuryCollections/>
      <StylesCollections/>
      <Testimonials/>
      <Footer/>
    </>
  );
};

export default HomeSection;