import Layout from "../components/layout/Layout";
// import ToolsSection1 from "../components/tools/section1";
// import ToolsSection2 from "../components/tools/section2";
// import ToolsSection3 from "../components/tools/section3";
// import ToolsSection4 from "../components/tools/section4"; 
// import ToolsSection5 from "../components/tools/section5";
import Trustby from "../components/home/Trustby";
import Contact from "../components/home/Contact";
import ToolsHero from "../components/tools/toolsHero";
import PageHead from "../components/elements/PageHead";
import dynamic from "next/dynamic";

const DynamicToolSection1 = dynamic( ()=> import("../components/tools/section1"),{ssr:false})
const DynamicToolSection2 = dynamic( ()=> import("../components/tools/section2"),{ssr:false})
const DynamicToolSection3 = dynamic( ()=> import("../components/tools/section3"),{ssr:false})
const DynamicToolSection4 = dynamic( ()=> import("../components/tools/section4"),{ssr:false})
const DynamicToolSection5 = dynamic( ()=> import("../components/tools/section5"),{ssr:false})

const Tools = () => {
  return (
    <>
      <PageHead title={"NEXT ASO Tools"} />
      <Layout>
        <ToolsHero />
        <Trustby heading = {"Brands we’ve helped grow"}/>
        <DynamicToolSection1 />
        <DynamicToolSection2 />
        <DynamicToolSection3 />
        <DynamicToolSection4 />
        <DynamicToolSection5 />
        <Contact />
      </Layout>
    </>
  );
};

export default Tools;
