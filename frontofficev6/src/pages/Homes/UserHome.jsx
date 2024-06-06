import React, { useEffect } from "react";
import CounterAreaTwo from "../../components/CounterAreas/CounterAreaTwo";
import ProjectAreaTwo from "../../components/ProjectAreas/ProjectAreaTwo";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";

const HomeOne = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout
        header={1}
        footer={1}
        headerClassName={"header-style-two"}
        topHeaderClassName={"header-top-two"}
      >
         <BreadcrumbArea
        
        />
       
        <ProjectAreaTwo />
      </Layout>
    </>
  );
};

export default HomeOne;
