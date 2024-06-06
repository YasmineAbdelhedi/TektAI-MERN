import React, { useEffect } from "react";
import BlogListArea from "../../components/Blogs/BlogListArea";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";

const BlogListPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <Layout header={1} footer={1}>
      <BreadcrumbArea title={"Blog List"} subtitle={"Blog List"} />
      <BlogListArea />
    </Layout>
  );
};

export default BlogListPage;
