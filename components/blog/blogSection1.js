import React from "react";

const BlogSection1 = () => {
  return (
    <>
      <section className="section banner-service bg-grey-60 position-relative">
        <div className="box-banner-abs">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-7 col-lg-12">
                <div className="box-banner-service">
                  <h2 className="color-brand-1 mb-20">
                    All the important insights, guidance and news you need to
                    know.
                  </h2>
                  <div className="row">
                    <div className="col-lg-9">
                      <p className="font-lg color-grey-500">
                        Keep up-to-date with all our latest company news and
                        business content. The latest news, tips and advice to
                        help you run your business with less fuss
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-xxl-6 col-xl-6 col-lg-6" />
          <div className="col-xxl-6 col-xl-6 col-lg-6 pr-0">
            <div className="d-none d-xxl-block pl-70">
              <img
                className="w-100 d-block"
                loading="lazy"
                src="assets/imgs/page/blog/banner.png"
                alt="iori"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection1;
