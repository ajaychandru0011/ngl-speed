import React from "react";
import Image from "next/image";

const Trustby1 = () => {
  return (
    <section className="section bg-brand-1">
      <div className="row mt-100 mb-50">
        <h2 className="color-white mb-15 font-bold text-center">
          Apps we’ve helped grow
        </h2>
        <p className="text-sm color-white mb-1 text-center">
          And 100’s of other top companies – ranging upto 0.5 Billion downloads
        </p>
      </div>
      <div class="section home12-logos">
    <marquee>
        <div class="container">
            <ul class="lists-logo">
              <li>
                <Image
                  width={100}
                  height={40}
                  src="/assets/imgs/page/homepage12/placed.png"
                  alt="iori"
                />
              </li>
              <li>
                <Image
                  width={100}
                  height={40}
                  src="/assets/imgs/page/homepage12/cuebiq.png"
                  alt="iori"
                />
              </li>
              <li>
                <Image
                  width={100}
                  height={40}
                  src="/assets/imgs/page/homepage12/factual.png"
                  alt="iori"
                />
              </li>
              <li>
                <Image
                  width={100}
                  height={40}
                  src="/assets/imgs/page/homepage12/placeiq.png"
                  alt="iori"
                />
              </li>
              <li>
                <Image
                  width={100}
                  height={40}
                  src="/assets/imgs/page/homepage12/airmeet.png"
                  alt="iori"
                />
              </li>
              <li>
                <Image
                  width={100}
                  height={40}
                  src="/assets/imgs/page/homepage12/spen.png"
                  alt="iori"
                />
              </li>
              <li>
                <Image
                  width={100}
                  height={40}
                  src="/assets/imgs/page/homepage12/klippa.png"
                  alt="iori"
                />
              </li>
              <li>
                <Image
                  width={100}
                  height={40}
                  src="/assets/imgs/page/homepage12/matrixian.png"
                  alt="iori"
                />
              </li>
            </ul>
        </div>
              </marquee>
      </div>
    </section>
  );
};

export default Trustby1;
