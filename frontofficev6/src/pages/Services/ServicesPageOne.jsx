import React, { useEffect } from "react";
import BrandArea from "../../components/BrandArea/BrandArea";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import IntroductionAreaTwo from "../../components/Introduction/IntroductionAreaTwo";
import ServicesArea from "../../components/ServicesArea/ServicesArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";

const ServicesPageOne = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout header={1} footer={1}>
        <BreadcrumbArea title={"All Services"} subtitle={"All Services"} />
        <ServicesArea />
        <IntroductionAreaTwo />
        <BrandArea className={"inner-brand-area pb-70"} />
      </Layout>
    </>
  );
};

export default ServicesPageOne;
