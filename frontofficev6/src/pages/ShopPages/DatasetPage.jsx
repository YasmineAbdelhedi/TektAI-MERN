import React, { useEffect } from "react";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import ShopArea from "../../components/ShopAreas/ShopArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";

const DatasetPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <Layout header={1} footer={1}>
      
      <DatasetArea />
      <ShopArea />
    </Layout>
  );
};

export default DatasetPage;
