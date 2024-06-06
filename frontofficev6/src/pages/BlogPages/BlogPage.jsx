import React, { useEffect } from "react";
import BlogPageArea from "../../components/Blogs/BlogPageArea";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";

const BlogPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <Layout header={1} footer={1}>
      <BreadcrumbArea title={"Blog Page"} subtitle={"Blog Page"} />
      <BlogPageArea />
    </Layout>
  );
};

export default BlogPage;
