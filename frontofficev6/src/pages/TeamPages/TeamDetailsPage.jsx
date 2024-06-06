import React, { useEffect } from "react";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import TeamDetailsArea from "../../components/Team/TeamDetailsArea/TeamDetailsArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";

const TeamDetailsPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout header={1} footer={1}>
        <TeamDetailsArea />
      </Layout>
    </>
  );
};

export default TeamDetailsPage;
