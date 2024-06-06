import React, { useEffect } from "react";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import ShopArea from "../../components/ShopAreas/ShopArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import ChallengeSearch from "../../components/Headers/ChallengeSearch";

const ShopPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <Layout header={1} footer={1}>
      <ChallengeSearch/>
      <button className="btn" style={{marginLeft:"10%",backgroundColor:"#27F26E", width:"300px"}}>Create your own challenge</button>
      <ShopArea />
    </Layout>
  );
};

export default ShopPage;
