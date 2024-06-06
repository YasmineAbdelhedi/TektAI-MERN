import React, { useEffect } from "react";
import BrandArea from "../components/BrandArea/BrandArea";
import BreadcrumbArea from "../components/BreadcrumbArea/BreadcrumbArea";
import EstimateArea from "../components/EstimateArea/CreateChallengeArea";
import Layout from "../layouts/Layout";
import { gsapTitleAnimation } from "../lib/gsap-lib/gsapTitleAnimation";

const EstimatePage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout header={1} footer={1}>
        {/* <BreadcrumbArea
          title={"Request & Estimate"}
          subtitle={"Request & Estimate"}
        /> */}
        <EstimateArea />
        {/* <BrandArea className={"inner-brand-area pb-70"} /> */}
      </Layout>
    </>
  );
};

export default EstimatePage;
