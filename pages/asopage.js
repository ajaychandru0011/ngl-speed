import Layout from "../components/layout/Layout";
import ASOsection1 from "../components/asoSection1";
import Testimonials from "../components/Testimonials";
import Tools from "../components/Tools";
import Test from "../components/Test";
const AsoPage = () => {
    const category = "Website's";
  return (
    <>
      <Layout>
        {/* <ASOsection1 /> */}
        {/* Section */}
        <div className="mt-100" />
        {/* <div className="section">
          <div className="container">
            <div className="box-radius-logo">
              <div className="text-center">
                <p className="font-lg color-brand-1">Trusted By Enterprises</p>
              </div>
              <div className="mt-30">
                <ul className="list-partners">
                  <li>
                    <img
                      src="/assets/imgs/page/homepage1/placed.png"
                      alt="iori"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/imgs/page/homepage1/cuebiq.png"
                      alt="iori"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/imgs/page/homepage1/factual.png"
                      alt="iori"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/imgs/page/homepage1/placeiq.png"
                      alt="iori"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/imgs/page/homepage1/airmeet.png"
                      alt="iori"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/imgs/page/homepage1/spen.png"
                      alt="iori"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/imgs/page/homepage1/klippa.png"
                      alt="iori"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/imgs/page/homepage2/reed.png"
                      alt="iori"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/imgs/page/homepage2/vuori.png"
                      alt="iori"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/imgs/page/homepage2/versed.png"
                      alt="iori"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/imgs/page/homepage1/matrix.png"
                      alt="iori"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/imgs/page/homepage1/klippa.png"
                      alt="iori"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/imgs/page/homepage1/factual.png"
                      alt="iori"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        {/* Tool Services */}
        {/* <Tools length={6}/> */}
        <Test category={category}/>
        {/* Testimonials section */}
        {/* <Testimonials /> */}
      </Layout>
    </>
  );
};

export default AsoPage;
