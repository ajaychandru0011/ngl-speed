import React, { useState } from "react";
import Header from "../components/Header";
import Hero1 from "../components/Hero";
import Trustby1 from "../components/Trustby";
import SEOSection1 from "../components/seo/seoSection1";
import Testimonials from "../components/Testimonials";
import SEOSection3 from "../components/seo/seoSection3";
import SEOSection4 from "../components/seo/seoSection4";
import SEOSection5 from "../components/seo/seoSection5";
import Contact from "../components/elements/Contact";
import Footer1 from "../components/Footer";
import SEOSection6 from "../components/seo/seoSection6";
import SEOHero from "../components/seo/seoHero";
import SEOTrustBy from "../components/seo/seoTrustBy";

const SEO = () => {
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
      <SEOHero />
      <SEOTrustBy />
      <SEOSection1 />
      <Testimonials />
      <SEOSection3 />
      <SEOSection4 />
      <SEOSection5 />
      <SEOSection6 />
      <Contact />
      <Footer1 />
    </>
  );
};

export default SEO;
