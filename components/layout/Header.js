import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = ({ handleOpen, handleRemove, openClass, addClass }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={`${
          scroll ? "header sticky-bar stick" : "header sticky-bar"
        } ${addClass}`}
      >
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link className="d-flex" href="/">
                  <img
                    alt="Ecom"
                    src="assets/imgs/template/logo.svg"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    <li>
                      <Link className="active" href="/">
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link href="/seo">SEO</Link>
                    </li>
                    <li>
                      <Link href="/tools">Tools</Link>
                    </li>
                    <li>
                      <Link href="/aso">Get Free ASO Analysis</Link>
                    </li>
                    <li>
                      <Link href="#">Blog</Link>
                    </li>
                    <li>
                      <Link href="/job-detail">Career</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="#">Terms</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy</Link>
                    </li>
                  </ul>
                </nav>
                <div
                  className={`burger-icon burger-icon-white ${
                    openClass && "burger-close"
                  }`}
                  onClick={() => {
                    handleOpen();
                    handleRemove();
                  }}
                >
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>
              <div className="header-right">
                <div className="d-none d-sm-inline-block">
                  <Link className="btn btn-brand-1 hover-up" href="register">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
