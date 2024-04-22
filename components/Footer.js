import Image from "next/image";
const Footer1 = () => {
  return (
    <footer className="footer">
      <div className="footer-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 width-20">
              <div className="mb-10">
                <Image
                  width={40}
                  height={40}
                  src="assets/imgs/template/logo.svg"
                  alt="iori"
                />
              </div>
              <p className="font-md mb-20 color-grey-400">
                Bangalore: 1216, 14th Main,
                <br className="d-none d-lg-block" />
                HSR Layout
              </p>
              <div class="font-md mb-20 color-grey-400">
                <strong class="font-md-bold">Email:</strong> contact@nextgrowthlabs.com
              </div>
              <h6 className="color-brand-1">Follow Us</h6>
              <div className="mt-15">
                <a className="icon-socials icon-facebook" href="#"></a>
                <a className="icon-socials icon-instagram" href="#"></a>
                <a className="icon-socials icon-twitter" href="#"></a>
                <a className="icon-socials icon-linkedin" href="#"></a>
                <a className="icon-socials icon-youtube" href="#"></a>
              </div>
            </div>
            <div className="col-lg-3 width-16 mb-30">
              <h5 className="mb-10 color-brand-1">Consulting</h5>
              <ul className="menu-footer">
                <li>
                  <a href="#!">App Store Optimization</a>
                </li>
                <li>
                  <a href="#!">Mobile App Promotion</a>
                </li>
                <li>
                  <a href="#!">Ad Cost Reduction</a>
                </li>
                <li>
                  <a href="#!">Search Engine Optimization</a>
                </li>
                <li>
                  <a href="#!">Free App Analysis</a>
                </li>
                <li>
                  <a href="#!">Improve Pagespeed</a>
                </li>
                <li>
                  <a href="#!">Mobile & Web Analytics</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-16 mb-30">
              <h5 className="mb-10 color-brand-1">Free Tools</h5>
              <ul className="menu-footer">
                <li>
                  <a href="#!">App Rank Checker</a>
                </li>
                <li>
                  <a href="#!">Bing Rank Checker</a>
                </li>
                <li>
                  <a href="#!">Keyword Auto Suggest</a>
                </li>
                <li>
                  <a href="#!">Google SERP Checker</a>
                </li>
                <li>
                  <a href="#!">SEO Content Assistant</a>
                </li>
                <li>
                  <a href="#!">iOS Keyword Search</a>
                </li>
                <li>
                  <a href="#!">SEO and ASO Chrome Add On</a>
                </li>
                <li>
                  <a href="#!">Bulk Page Speed Assessment</a>
                </li>
                <li>
                  <a href="#!">iOS Keyword Tracker</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-16 mb-30">
              <h5 className="mb-10 color-brand-1"></h5>
              <ul className="menu-footer">
                <li>
                  {" "}
                  <a href="#!">Android Rating Projection Tool</a>
                </li>
                <li>
                  {" "}
                  <a href="#!">Html Editor</a>
                </li>
                <li>
                  {" "}
                  <a href="#!">Website Rank Checker</a>
                </li>
                <li>
                  {" "}
                  <a href="#!">Emi Calculator</a>
                </li>
                <li>
                  {" "}
                  <a href="#!">Word To Html</a>
                </li>
                <li>
                  {" "}
                  <a href="#!">Font Changer</a>
                </li>
                <li>
                  {" "}
                  <a href="#!">Multi Tool</a>
                </li>
                <li>
                  {" "}
                  <a href="#!">Keyword Suggestion</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-23">
              {/* <h5 className="mb-10 color-brand-1">App &amp; Payment</h5> */}
              <div>
                <p className="font-sm color-grey-400">
                  Our mission is to leverage technology and data science to
                  maximize your app's organic users.
                </p>
                <div className="mt-20">
                  <a className="mr-10" href="#">
                    <Image
                      src="/social_icons/download 1.svg"
                      alt="Description of the image"
                      width={220}
                      height={82}
                    />
                  </a>
                </div>
                <p className="font-sm color-grey-400 mt-20 mb-10">Contact Us</p>
                <p className="font-sm color-grey-400 mt-20 mb-10">
                  Request Access to Free Tools Suite
                </p>
                <p className="font-sm color-grey-400 mt-20 mb-10">
                  Data Studio Connector For PlayStore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2">
        <div className="container">
          <div className="footer-bottom">
            <div className="row">
              <div className="col-lg-6 col-md-12 text-center text-lg-start">
                <ul className="menu-bottom">
                  <li>
                    <a
                      className="font-sm color-grey-300"
                      href="term-conditions.html"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-sm color-grey-300"
                      href="term-conditions.html"
                    >
                      Cookies
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-sm color-grey-300"
                      href="term-conditions.html"
                    >
                      Terms of service
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-12 text-center text-lg-end">
                <span className="color-grey-300 font-md">
                  ©NextGrowthLabs 2024. All right reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
