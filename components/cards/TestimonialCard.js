import React from "react";

const TestimonialCard = (props) => {
  return (
    <div className="card-review width-45 mb-40">
      <div className="card-info">
        <div className="rating-review">
          <img src="/assets/imgs/page/homepage7/star.png" alt="star" />
          <img src="/assets/imgs/page/homepage7/star.png" alt="star" />
          <img src="/assets/imgs/page/homepage7/star.png" alt="star" />
          <img src="/assets/imgs/page/homepage7/star.png" alt="star" />
          <img src="/assets/imgs/page/homepage7/star.png" alt="star" />
        </div>
        <h5 className="color-grey-800 mb-20">{props.review}</h5>
        <div className="box-author flex-nowrap justify-content-sm-between">
          <div className="author-info">
            <a href="#">
              <span className="font-md-bold color-brand-1 author-name">
                {props.author}
              </span>
            </a>
            <span className="font-xs color-grey-500 department">
              {props.department}
            </span>
          </div>
          <span>{props.img}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
