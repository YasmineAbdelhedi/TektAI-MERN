import React, { useEffect } from "react";
import EditProfile from "../../components/Profile/EditProfile";
import Layout from "../../layouts/Layout";

import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";

const HomeTwo = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout header={1} footer={1}>
        <EditProfile />
       
      </Layout>
    </>
  );
};

export default HomeTwo;
