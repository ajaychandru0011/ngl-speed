import React from "react";
import Link from "next/link";

const OurServices = () => {
  return (
    <>
      <section className="section mt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="color-brand-1 mb-20">Our services</h2>
              <p className="font-lg color-gray-500">
                What makes us different from others? We give holistic solutions
                <br className="d-none d-lg-block" />
                with strategy, design &amp; technology.
              </p>
            </div>
          </div>
          <div className="row mt-50">
            <div className="col-lg-6">
              <div className="card-offer card-we-do hover-up">
                <div className="card-image">
                  <img src="assets/imgs/page/homepage4/offer1.png" alt="iori" />
                </div>
                <div className="card-info">
                  <h4 className="color-brand-1 mb-10">
                    <Link
                      className="color-brand-1"
                      href="Seamless importing and round-tripping of Microsoft Project plans, Excel files & CSV files."
                    >
                      ASO
                    </Link>
                  </h4>
                  <p className="font-md color-grey-500 mb-5">
                    Seamless importing and round-tripping of Microsoft Project
                    plans, Excel files & CSV files.
                  </p>
                  <div className="box-button-offer">
                    <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                      Learn More
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card-offer card-we-do hover-up">
                <div className="card-image">
                  <img src="assets/imgs/page/homepage4/offer2.png" alt="iori" />
                </div>
                <div className="card-info">
                  <h4 className="color-brand-1 mb-10">
                    <Link
                      className="color-brand-1"
                      href="What makes us different from others? We give holistic solutions with strategy, design & technology."
                    >
                      SEO
                    </Link>
                  </h4>
                  <p className="font-md color-grey-500 mb-5">
                    What makes us different from others? We give holistic
                    solutions with strategy, design & technology.{" "}
                  </p>
                  <div className="box-button-offer">
                    <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                      Learn More
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card-offer card-we-do hover-up">
                <div className="card-image">
                  <img src="assets/imgs/page/homepage4/offer3.png" alt="iori" />
                </div>
                <div className="card-info">
                  <h4 className="color-brand-1 mb-10">
                    <Link
                      className="color-brand-1"
                      href="No lag time, no lost effort when priorities change, no email black hole. As team collaboration improves"
                    >
                      Ads
                    </Link>
                  </h4>
                  <p className="font-md color-grey-500 mb-5">
                    No lag time, no lost effort when priorities change, no email
                    black hole. As team collaboration improves
                  </p>
                  <div className="box-button-offer">
                    <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                      Learn More
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card-offer card-we-do hover-up">
                <div className="card-image">
                  <img src="assets/imgs/page/homepage4/offer4.png" alt="iori" />
                </div>
                <div className="card-info">
                  <h4 className="color-brand-1 mb-10">
                    <Link
                      className="color-brand-1"
                      href="Share updates instantly within our project management software, and get the entire team collaborating"
                    >
                      Engagement & Retention
                    </Link>
                  </h4>
                  <p className="font-md color-grey-500 mb-5">
                    Share updates instantly within our project management
                    software, and get the entire team collaborating
                  </p>
                  <div className="box-button-offer">
                    <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                      Learn More
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
