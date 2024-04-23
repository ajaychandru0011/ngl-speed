import React from "react";
import Link from "next/link";
const SEOHero = () => {
  return (
    <section className="section banner-2">
      <div className="container">
        <div className="banner-1">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="color-brand-1 mb-20">
                Increase Visibility & Traffic with Our SEO Solutions
              </h1>
              <div className="row">
                <div className="col-lg-9">
                  <p className="font-md color-grey-500">
                    Since 2016, we've been at the forefront of SEO. Some of
                    world's top brands too read these lines, before contacting
                    and working with us. The next 5 minutes you spend reading
                    about us will give you a glimpse to our approach. Want a
                    customised presentation? Let us know.
                  </p>
                </div>
              </div>
              <div className="mt-30">
                <h5 className="color-brand-1">Connect With Us Today</h5>
              </div>
              <div className="box-button mt-20">
                <Link className="btn btn-brand-1 hover-up" href="#">
                  Book An Appointment
                  <svg
                    className="w-6 h-6 icon-16 ml-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block">
              <img src="assets/imgs/page/homepage2/banner.png" alt="iori" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOHero;
