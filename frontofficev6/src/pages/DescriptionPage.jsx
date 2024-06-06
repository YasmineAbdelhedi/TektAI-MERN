import React, { useEffect } from "react";
import BrandArea from "../components/BrandArea/BrandArea";
import BreadcrumbArea from "../components/BreadcrumbArea/BreadcrumbArea";
import SolutionForm from "../components/solution/solution";
import Layout from "../layouts/Layout";
import { gsapTitleAnimation } from "../lib/gsap-lib/gsapTitleAnimation";
import ChallengeDetails from "../../src/components/Description/ChallengeDetails"
import ChallengeDetailsArea from "../components/Description/ChallengeDetailsArea";
const DescriptionPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout header={1} footer={1}>
      <BreadcrumbArea title={"description"} subtitle={"description"} />

        <ChallengeDetails />
        {/* <BrandArea className={"inner-brand-area pb-70"} /> */}
      </Layout>
    </>
  );
};

export default DescriptionPage;