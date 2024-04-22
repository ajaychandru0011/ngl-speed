import React, { useState } from "react";
import Header from "../components/Header";
import Hero1 from "../components/Hero";
import ToolsSection1 from "../components/tools/section1";
import ToolsSection2 from "../components/tools/section2";
import ToolsSection3 from "../components/tools/section3";
import ToolsSection4 from "../components/tools/section4";
import ToolsSection5 from "../components/tools/section5";
import Footer1 from "../components/Footer";
import Trustby1 from "../components/Trustby";
import Contact from "../components/elements/Contact";
const Tools = () => {
  const [openClass, setOpenClass] = useState("");

  const handleOpen = () => {
    document.body.classList.add("mobile-menu-active");
    setOpenClass("sidebar-visible");
  };

  const handleRemove = () => {
    if (openClass === "sidebar-visible") {
      setOpenClass("");
      document.body.classList.remove("mobile-menu-active");
    }
  };
  return (
    <>
      <Header
        handleOpen={handleOpen}
        handleRemove={handleRemove}
        openClass={openClass}
        addClass="header-home7"
      />
      <Hero1 />
      <Trustby1 />
      <ToolsSection1 />
      <ToolsSection2 />
      <ToolsSection3 />
      <ToolsSection4 />
      <ToolsSection5 />
      <Contact />
      <Footer1 />
    </>
  );
};

export default Tools;
