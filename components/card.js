import React from "react";
import Image from "next/image";
const Card = (props) => {
  return (
    <>
      <div className="card-offer-style-3">
        <div className="card-head">
          <Image
            src={props.image}
            width={100}
            height={100}
            alt="service image"
          />
          <div className="carrd-title">
            <h4 className="color-brand-1">{props.heading}</h4>
          </div>
        </div>
        <div className="card-info">
          <p className="font-sm color-grey-500 mb-15">{props.desc}</p>
          <div className="box-button-offer">
            <a className="btn btn-default font-sm-bold pl-0 color-brand-1 hover-up">
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
    </>
  );
};

export default Card;
