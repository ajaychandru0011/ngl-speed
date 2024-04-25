import React from "react";

const CareerSection1 = () => {
  return (
    <section className="section mt-90">
      <div className="container">
        <div className="text-center">
          <h6 className="color-grey-500 mb-15">
            Take a look at our current openings
          </h6>
          <h2 className="color-brand-1">
            We are Always Searching For <br className="d-none d-lg-block" />
            Amazing People to Join Our Team.{" "}
          </h2>
        </div>
        <div className="box-video mt-70">
          {" "}
          <img src="assets/imgs/page/career/img-video.png" alt="iori" />
          <div className="image-1 shape-1">
            <img src="assets/imgs/page/career/certify.png" alt="iori" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection1;
