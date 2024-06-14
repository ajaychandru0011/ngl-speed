import Button from "../elements/Button";
import Link from "next/link";
import Image from "next/image";
const CareerSection3 = () => {
  return (
    <section className="section mt-200">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="color-brand-1 mb-20">Career Opportunities</h2>
            <p className="font-lg color-gray-500">
              Explore our open roles for working totally remotely, from the
              <br className="d-none d-lg-block" />
              office or somewhere in between.
            </p>
          </div>
        </div>
        <div className="row mt-50">
          <div className="col-lg-6">
            <div className="card-offer card-we-do hover-up">
              <div className="card-image">
                <Image
                  width={69}
                  height={75}
                  src="/assets/imgs/page/homepage4/offer1.png"
                  loading="lazy"
                  alt="iori"
                />
              </div>
              <div className="card-info">
                <h4 className="color-brand-1 mb-10">UI/UX Designer Fulltime</h4>
                <p className="font-md color-grey-500 mb-5">
                  Seamless importing and round-tripping of Microsoft Project
                  plans, Excel files &amp; CSV files.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-offer card-we-do hover-up">
              <div className="card-image">
                <Image
                  width={69}
                  height={75}
                  src="/assets/imgs/page/homepage4/offer2.png"
                  loading="lazy"
                  alt="iori"
                />
              </div>
              <div className="card-info">
                <h4 className="color-brand-1 mb-10">Full Stack Engineer</h4>
                <p className="font-md color-grey-500 mb-5">
                  What makes us different from others? We give holistic
                  solutions with strategy, design &amp; technology.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-offer card-we-do hover-up">
              <div className="card-image">
                <Image
                  width={69}
                  height={75}
                  src="/assets/imgs/page/homepage4/offer3.png"
                  loading="lazy"
                  alt="iori"
                />
              </div>
              <div className="card-info">
                <h4 className="color-brand-1 mb-10">Java Software Engineer</h4>
                <p className="font-md color-grey-500 mb-5">
                  No lag time, no lost effort when priorities change, no email
                  black hole. As team collaboration improves
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-offer card-we-do hover-up">
              <div className="card-image">
                <Image
                  width={69}
                  height={75}
                  src="/assets/imgs/page/homepage4/offer4.png"
                  loading="lazy"
                  alt="iori"
                />
              </div>
              <div className="card-info">
                <h4 className="color-brand-1 mb-10">Frontend Developer</h4>
                <p className="font-md color-grey-500 mb-5">
                  Share updates instantly within our project management
                  software, and get the entire team collaborating
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-offer card-we-do hover-up">
              <div className="card-image">
                <Image
                  width={69}
                  height={75}
                  src="/assets/imgs/page/homepage4/offer5.png"
                  loading="lazy"
                  alt="iori"
                />
              </div>
              <div className="card-info">
                <h4 className="color-brand-1 mb-10">
                  React Native Web Developer
                </h4>
                <p className="font-md color-grey-500 mb-5">
                  Seamless importing and round-tripping of Microsoft Project
                  plans, Excel files &amp; CSV files.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-offer card-we-do hover-up">
              <div className="card-image">
                <Image
                  width={69}
                  height={75}
                  src="/assets/imgs/page/homepage4/offer6.png"
                  loading="lazy"
                  alt="iori"
                />
              </div>
              <div className="card-info">
                <h4 className="color-brand-1 mb-10">Senior System Engineer</h4>
                <p className="font-md color-grey-500 mb-5">
                  What makes us different from others? We give holistic
                  solutions with strategy, design &amp; technology.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-40 mb-50 text-center">
          <Button
            text={"View & Apply"}
            href={"https://nextgrowth-labs.workable.com/"}
          />
        </div>
      </div>
    </section>
  );
};

export default CareerSection3;
