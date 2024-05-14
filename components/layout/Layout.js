import React, { useState } from "react";
import BackToTop from "../elements/BackToTop";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
const Layout = ({ children }) => {
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
      <Sidebar openClass={openClass} />
      <main className="main">{children}</main>
      <BackToTop />
      <Footer />
    </>
  );
};

export default Layout;
