import React, { useEffect } from "react";
import BrandArea from "../components/BrandArea/BrandArea";
import BreadcrumbArea from "../components/BreadcrumbArea/BreadcrumbArea";
import SolutionForm from "../components/solution/solution";
import Layout from "../layouts/Layout";
import { gsapTitleAnimation } from "../lib/gsap-lib/gsapTitleAnimation";

const SolutionPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout header={1} footer={1}>

        <SolutionForm />
      </Layout>
    </>
  );
};

export default SolutionPage;