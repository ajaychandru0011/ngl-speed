import React from "react";
import ServicesCard from "../cards/ServicesCard";
const SERVICES_DATA = [
  {
    image: "/assets/imgs/page/homepage4/offer1.png",
    heading: "ASO",
    desc: "With our expert ASO strategies, your app will not only attract more users but also retain them, leading to increased engagement and profitability. Let us help you maximize your app’s potential and achieve your desired results.",
    route: "/aso",
  },
  {
    image: "/assets/imgs/page/homepage4/offer2.png",
    heading: "SEO",
    desc: "With our expert SEO strategies, your site will not only attract more visitors but also engage and convert them, leading to increased sales and success. Let us help you unlock your website’s full potential and achieve your desired outcomes.",
    route: "/seo",
  },
  {
    image: "/assets/imgs/page/homepage4/offer3.png",
    heading: "Ads",
    desc: "With our expert ad management, your business will see increased traffic, higher engagement, and improved sales. Let us help you leverage the power of ads to achieve your marketing goals and grow your business effectively.",
    route: "/contact",
  },
  {
    image: "/assets/imgs/page/homepage4/offer4.png",
    heading: "Engagement & Retention",
    desc: "Our Engagement & Retention services are tailored to foster customer loyalty and drive sustained growth for your business. We implement personalized strategies that keep your audience engaged and invested in your brand.",
    route: "/contact",
  },
];

const OurServices = () => {
  return (
    <>
      <section className="section mt-80 content">
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
            {SERVICES_DATA.map((data, index) => (
              <ServicesCard
                key={index}
                image={data.image}
                heading={data.heading}
                desc={data.desc}
                route={data.route}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
