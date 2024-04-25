import Button from "../elements/Button";

const Hero = () => {
  return (
    <section class="section banner-12">
      <div class="asset-1 shape-1"></div>
      <div class="asset-2 shape-2"></div>
      <div class="asset-3 shape-3"></div>
      <div class="asset-4 shape-1"></div>
      <div class="asset-5 shape-2"></div>
      <div class="container text-center">
        <div class="row mt-150">
          <div class="col-xl-8 col-lg-10 m-auto" style={{ zIndex: 999 }}>
            <h1 class="color-brand-1 mb-25 mt-10">App Store Optimization</h1>
            <p class="font-md color-grey-500 mb-25">
              Since 2016, we are at the forefront of Digital Marketing. We just
              don't service our clients - we <br />
              reverse engineer search algorithms. We process billions of data
              point every day to drive actionable insights.
            </p>

            <div class="d-none d-sm-inline-block">
              <Button
                text={"Contact Us"}
                href={"http://www.example.com"}
                showIcon={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
