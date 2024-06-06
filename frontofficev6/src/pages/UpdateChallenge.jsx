import React, { useEffect } from "react";
import BrandArea from "../components/BrandArea/BrandArea";
import BreadcrumbArea from "../components/BreadcrumbArea/BreadcrumbArea";
import ChallengeArea from "../components/Challenges/ChallengeArea";
import Layout from "../layouts/Layout";
import { gsapTitleAnimation } from "../lib/gsap-lib/gsapTitleAnimation";

const UpdateChallenge = () => {
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
        <ChallengeArea />
        {/* <BrandArea className={"inner-brand-area pb-70"} /> */}
      </Layout>
    </>
  );
};

export default UpdateChallenge;
