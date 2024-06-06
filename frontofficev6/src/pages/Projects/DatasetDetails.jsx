import React, { useEffect } from "react";
import BrandArea from "../../components/BrandArea/BrandArea";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import ProjectDetailsArea from "../../components/ProjectAreas/ProjectDetailsArea/ProjectDetailsArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import DatasetArea from "../../components/ProjectAreas/ProjectDetailsArea/DatasetArea";
const DatasetDetails = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout header={1} footer={1}>
       
        <DatasetArea/>
       
      </Layout>
    </>
  );
};

export default DatasetDetails;
