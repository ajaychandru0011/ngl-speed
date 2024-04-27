import Button from "../elements/Button";
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
                <Button
                  text={"Book An Appointment"}
                  showIcon={true}
                  href={
                    "https://calender.multivariate.ai/team/nextgrowth-labs/marketing-meet"
                  }
                  target="blank"
                />
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
