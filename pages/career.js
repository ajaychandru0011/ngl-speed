import React from "react";
import CareerSection1 from "../components/career/careerSection1";
import CareerSection2 from "../components/career/careerSection2";
import CareerSection3 from "../components/career/careerSection3";
import CareerSection4 from "../components/career/careerSection4";
import CareerSection5 from "../components/career/careerSection5";
import CareerSection6 from "../components/career/careerSection6";
import CareerSection7 from "../components/career/careerSection7";
import NewsLetter from "../components/elements/Newsletter";
import Layout from "../components/layout/Layout";

const career = () => {
  return (
    <>
      <Layout>
        <CareerSection1 />
        <CareerSection2 />
        <CareerSection3 />
        <CareerSection4 />
        <CareerSection5 />
        <CareerSection6 />
        <CareerSection7 />
        <NewsLetter />
      </Layout>
    </>
  );
};

export default career;
