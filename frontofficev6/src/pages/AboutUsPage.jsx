import React, { useEffect } from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import BrandArea from "../components/BrandArea/BrandArea";
import BreadcrumbArea from "../components/BreadcrumbArea/BreadcrumbArea";
import OurHistory from "../components/OurHistory/OurHistory";
import ServicesAreaSix from "../components/ServicesArea/ServicesAreaSix";
import TeamOne from "../components/Team/TeamOne";
import VideoAreaTwo from "../components/VideoArea/VideoAreaTwo";
import Layout from "../layouts/Layout";
import { gsapTitleAnimation } from "../lib/gsap-lib/gsapTitleAnimation";
import TeamTwo from "../components/Team/TeamTwo";

const AboutUsPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout header={1} footer={1}>
        <AboutUs />
        <ServicesAreaSix />
        
        {/* <OurHistory /> */}
        <TeamTwo />
        {/* <BrandArea className={"inner-brand-area pb-70"} /> */}
      </Layout>
    </>
  );
};

export default AboutUsPage;
