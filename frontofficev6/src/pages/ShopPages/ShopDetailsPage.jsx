import React, { useEffect } from "react";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import ShopDetailsArea from "../../components/ShopAreas/ShopDetailsArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";

const ShopDetailsPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <Layout header={1} footer={1}>
      <BreadcrumbArea title={"Shop Details"} subtitle={"Shop "} />
      <ShopDetailsArea />
    </Layout>
  );
};

export default ShopDetailsPage;
