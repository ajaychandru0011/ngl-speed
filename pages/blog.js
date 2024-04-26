import React from "react";
import BlogSection1 from "../components/blog/blogSection1";
import BlogSection2 from "../components/blog/blogSection2";
import Layout from "../components/layout/Layout";
import NewsLetter from "../components/elements/Newsletter";
import PageHead from "../components/elements/PageHead";
const Blog = () => {
  return (
    <>
      <PageHead title = {"All the important insights, guidance and news you need to know."} />
      <Layout>
        <BlogSection1 />
        <BlogSection2 />
        <NewsLetter />
      </Layout>
    </>
  );
};

export default Blog;
