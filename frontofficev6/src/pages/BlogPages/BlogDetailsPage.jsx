import React, { useEffect } from "react";
import BlogDetailsArea from "../../components/Blogs/BlogDetailsArea/BlogDetailsArea";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";

const BlogDetailsPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <Layout header={1} footer={1}>
     
      <BlogDetailsArea />
    </Layout>
  );
};

export default BlogDetailsPage;
