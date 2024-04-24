import React from "react";
import Image from "next/image";
import ContactForm from "../elements/ContactForm";
const Asocontact = () => {
  return (
    <section className="section mt-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h2 class="color-brand-1 mb-15">
              Need help to skyrocket your add-on rankings?
            </h2>
            <p class="font-sm color-grey-500">
              Elevate your app's success with our ASO expertise – we specialize
              in optimizing keywords, enhancing visibility, boost app-installs,
              and maximize conversions for unparalleled app growth.<br/>Get in touch
              with us, and a specialist will be with you in a few hours.
            </p>
            <div class="mt-50">
              <div class="card-offer card-we-do card-contact hover-up">
                <div class="card-image">
                  <Image
                    width={64}
                    height={73}
                    src="/assets/imgs/page/contact/img3.png"
                    alt="iori"
                  />
                </div>
                <div class="card-info">
                  <h6 class="color-brand-1 mb-10">
                    Get in touch with Our Experts
                  </h6>
                  <p class="font-md color-grey-500 mb-5">
                    Email us at : contact@nextgrowthlabs.com
                  </p>
                </div>
              </div>

            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Asocontact;
