import React, { useEffect } from "react";
import BrandArea from "../../components/BrandArea/BrandArea";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import ProjectDetailsArea from "../../components/ProjectAreas/ProjectDetailsArea/ProjectDetailsArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import HowToCompeteArea from "../../components/ProjectAreas/ProjectDetailsArea/HowToCompeteArea";
const ProjectDetailsPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout header={1} footer={1}>
        
        {/* <ProjectDetailsArea /> */}
        <HowToCompeteArea/>
       
      </Layout>
    </>
  );
};

export default ProjectDetailsPage;
