import React, { useEffect } from "react";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import TeamAll from "../../components/Team/TeamAll";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";

const TeamPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout header={1} footer={1}>
        <BreadcrumbArea title={"Team"} subtitle={"Team"} />
        <TeamAll />
      </Layout>
    </>
  );
};

export default TeamPage;
