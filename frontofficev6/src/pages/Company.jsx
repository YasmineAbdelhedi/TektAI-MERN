import React, { useEffect } from "react";
import CompanyPageArea from "../components/Contact/CompanyPageArea";
import Layout from "../layouts/Layout";
import { gsapTitleAnimation } from "../lib/gsap-lib/gsapTitleAnimation";

const CompanyPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <Layout header={1} footer={1}>
      <CompanyPageArea />
      {/* <ContactMapArea /> */}
    </Layout>
  );
};

export default CompanyPage;
