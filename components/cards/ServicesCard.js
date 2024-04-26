import React from "react";
import Link from "next/link";

const ServicesCard = (props) => {
  return (
    <div className="col-lg-6">
      <div className="card-offer card-we-do hover-up">
        <div className="card-image">
          <img src={props.image} alt="iori" />
        </div>
        <div className="card-info">
          <h4 className="color-brand-1 mb-10">
            <Link
              className="color-brand-1"
              href="Seamless importing and round-tripping of Microsoft Project plans, Excel files & CSV files."
            >
              {props.heading}
            </Link>
          </h4>
          <p className="font-md color-grey-500 mb-5">{props.desc}</p>
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
  );
};

export default ServicesCard;
