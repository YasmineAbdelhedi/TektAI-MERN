import React, { useEffect } from "react";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";

const Success = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <style>
        {
          `
         .background-video {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%; 
            z-index: -100;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
          }
          `
        }
      </style>
      <Layout header={1} footer={1}>
        <div style={{ height: '100vh', position: 'relative' }}>
          <video className="background-video" src="/img/images/successpay.mp4" autoPlay muted loop style={{ objectFit: 'cover' }}></video>
        </div>
      </Layout>
    </>
  );
};

export default Success;
