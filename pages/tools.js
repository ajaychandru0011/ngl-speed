import Layout from "../components/layout/Layout";
import ToolsSection1 from "../components/tools/section1";
import ToolsSection2 from "../components/tools/section2";
import ToolsSection3 from "../components/tools/section3";
import ToolsSection4 from "../components/tools/section4";
import ToolsSection5 from "../components/tools/section5";
import Trustby from "../components/home/Trustby";
import Contact from "../components/home/Contact";
import ToolsHero from "../components/tools/toolsHero";
import Head from "next/head";

const Tools = () => {
  return (
    <>
      <Head>
        <title>NEXT ASO Tools</title>
      </Head>
      <Layout>
        <ToolsHero />
        <Trustby />
        <ToolsSection1 />
        <ToolsSection2 />
        <ToolsSection3 />
        <ToolsSection4 />
        <ToolsSection5 />
        <Contact />
      </Layout>
    </>
  );
};

export default Tools;
