import Image from "next/image";
import Button from "../elements/Button";
import Link from "next/link";

const CareerSection6 = () => {
  return (
    <section className="section mt-50 pt-50 pb-40">
      <div className="container">
        <div className="box-cover-border">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Image
                layout="responsive"
                width={100}
                height={100}
                className="d-block"
                src="/assets/imgs/page/homepage2/img-marketing.png"
                loading="lazy"
                alt="iori"
              />
            </div>
            <div className="col-lg-6">
              <div className="box-info-video">
                <span className="btn btn-tag">Get in touch</span>
                <h2 className="color-brand-1 mt-15 mb-20">
                  Want to talk to a marketing expert?
                </h2>
                <p className="font-md color-grey-500">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit laborum — semper quis lectus
                  nulla. Interactively transform magnetic growth strategies
                  whereas prospective &quot;outside the box&quot; thinking.
                </p>
                <div className="box-button text-start mt-65">
                  {" "}
                  <Button text={"Contact Us"} href={"/contact"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection6;
