import React, { useEffect } from "react";
import BrandArea from "../../components/BrandArea/BrandArea";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import ProjectAllMasonry from "../../components/ProjectAreas/ProjectAllMasonry";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";

const ProjectPageTwo = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout header={1} footer={1}>
        <BreadcrumbArea
          title={"Projects Masonry"}
          subtitle={"Projects Masonry"}
        />
        <ProjectAllMasonry />
        <BrandArea className={"inner-brand-area pb-70"} />
      </Layout>
    </>
  );
};

export default ProjectPageTwo;
