import React, { useEffect } from "react";
import AboutUsThree from "../../components/AboutUs/AboutUsThree";
import BannerThree from "../../components/Banner/signInPage";
import BlogAreaFour from "../../components/Blogs/BlogAreaFour";
import BrandArea from "../../components/BrandArea/BrandArea";
import CounterAreaTwo from "../../components/CounterAreas/CounterAreaTwo";
import FaqAreaTwo from "../../components/FaqArea/FaqAreaTwo";
import ProjectAreaThree from "../../components/ProjectAreas/ProjectAreaThree";
import ServicesAreaFive from "../../components/ServicesArea/ServicesAreaFive";
import TestimonialAreaFour from "../../components/Testimonials/TestimonialAreaFour";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import HowWeWork from "../../components/HowWeWork/HowWeWork";

const HomeThree = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout header={3} footer={1}>
        <BannerThree />
        <AboutUsThree />
        <ServicesAreaFive />
        <HowWeWork />
        <FaqAreaTwo />
        <TestimonialAreaFour />
        {/* <BrandArea /> */}

      </Layout>
    </>
  );
};

export default HomeThree;
