import React, { useState } from 'react';
import Header from "../components/Header";
import Sidebar from '../components/Sidebar';
import Hero from "../components/Hero";
import Trustby from '../components/Trustby'
import ASOsection1 from "../components/asoSection1";
import OurServices from "../components/OurServices";
import Testimonials from "../components/Testimonials";
import Tools from "../components/Tools";
import Services from "../components/Services";
import Marketing from "../components/Marketing";
import Footer from "../components/Footer";
import BackToTop from "../components/elements/BackToTop";
import Contact from '../components/elements/Contact';

export default function Home() {
  const [openClass, setOpenClass] = useState('');

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-active");
        setOpenClass("sidebar-visible")
    }

    const handleRemove = () => {
        if (openClass === "sidebar-visible") {
            setOpenClass("")
            document.body.classList.remove("mobile-menu-active");
        }
    }
  return (
    <>
      <Header handleOpen={handleOpen} handleRemove={handleRemove} openClass={openClass} addClass="header-home7" />
      <Sidebar openClass={openClass} />
      <Hero />
      <Trustby />
      <OurServices />
      <Testimonials />
      <Tools />
      <Services />
      <Marketing />
      {/* <ASOsection1 /> */}
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
