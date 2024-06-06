import React, { useEffect } from "react";
import BlogPageArea from "../../components/Blogs/BlogPageArea";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import TermsAndConditions from "../../components/Banner/Terms&Conditions";

const Terms = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <Layout header={1} footer={1}>
      <TermsAndConditions />
    </Layout>
  );
};

export default Terms;
