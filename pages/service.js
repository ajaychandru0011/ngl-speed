import React from "react";
import Card from "../components/card";
import cross from "../public/assets/imgs/page/homepage1/cross.png";
import cross2 from "../public/assets/imgs/page/homepage1/cross2.png";
import cross3 from "../public/assets/imgs/page/homepage1/cross3.png";
import cross4 from "../public/assets/imgs/page/homepage1/cross4.png";
import cross5 from "../public/assets/imgs/page/homepage1/cross5.png";
import cross6 from "../public/assets/imgs/page/homepage1/cross6.png";

const Services = () => {
  const SERVICES = [
    {
      image: cross,
      heading: "Cross Platform",
      desc: " Your site is not complete with only landings. Get essential innerpages using our ready demos",
    },
    {
      image: cross2,
      heading: "Business Strategy",
      desc: " Your site is not complete with only landings. Get essential innerpages using our ready demos",
    },
    {
      image: cross3,
      heading: "Local Marketing",
      desc: " Your site is not complete with only landings. Get essential innerpages using our ready demos",
    },
    {
      image: cross4,
      heading: "Social Media",
      desc: " Your site is not complete with only landings. Get essential innerpages using our ready demos",
    },
    {
      image: cross5,
      heading: "Brand Identity",
      desc: " Your site is not complete with only landings. Get essential innerpages using our ready demos",
    },
    {
      image: cross6,
      heading: "Digital Marketing",
      desc: " Your site is not complete with only landings. Get essential innerpages using our ready demos",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="service-header">
          <div className="col-lg-12 text-left mt-40 mb-40 service-header-div">
            <h2 className="color-brand-1 mb-20">What We Offer</h2>
            <p className="font-lg color-gray-500">
              What makes us different from others? We give holistic solutions
              <br className="d-none d-lg-block" />
              with strategy, design &amp; technology.
            </p>
          </div>
          <div className="box-button-offer">
            <a className="btn btn-default font-sm-bold pl-0 color-brand-1 hover-up  learn-more-btn">
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
        <div className="card-container">
          {SERVICES.map((item) => (
            <Card
              key={item.heading}
              image={item.image}
              heading={item.heading}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
