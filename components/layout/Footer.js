import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer mt-80">
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
              <div className="font-md mb-20 color-grey-400">
                <strong className="font-md-bold">Email:</strong>{" "}
                contact@nextgrowthlabs.com
              </div>
              <h6 className="color-brand-1">Follow Us</h6>
              <div className="mt-15">
                <Link className="icon-socials icon-facebook" href="#"></Link>
                <Link className="icon-socials icon-instagram" href="#"></Link>
                <Link className="icon-socials icon-twitter" href="#"></Link>
                <Link className="icon-socials icon-linkedin" href="#"></Link>
                <Link className="icon-socials icon-youtube" href="#"></Link>
              </div>
            </div>
            <div className="col-lg-3 width-16 mb-30">
              <h5 className="mb-10 color-brand-1">Consulting</h5>
              <ul className="menu-footer">
                <li>
                  <Link href="#!">App Store Optimization</Link>
                </li>
                <li>
                  <Link href="#!">Mobile App Promotion</Link>
                </li>
                <li>
                  <Link href="#!">Ad Cost Reduction</Link>
                </li>
                <li>
                  <Link href="#!">Search Engine Optimization</Link>
                </li>
                <li>
                  <Link href="#!">Free App Analysis</Link>
                </li>
                <li>
                  <Link href="#!">Improve Pagespeed</Link>
                </li>
                <li>
                  <Link href="#!">Mobile & Web Analytics</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-16 mb-30">
              <h5 className="mb-10 color-brand-1">Free Tools</h5>
              <ul className="menu-footer">
                <li>
                  <Link href="#!">App Rank Checker</Link>
                </li>
                <li>
                  <Link href="#!">Bing Rank Checker</Link>
                </li>
                <li>
                  <Link href="#!">Keyword Auto Suggest</Link>
                </li>
                <li>
                  <Link href="#!">Google SERP Checker</Link>
                </li>
                <li>
                  <Link href="#!">SEO Content Assistant</Link>
                </li>
                <li>
                  <Link href="#!">iOS Keyword Search</Link>
                </li>
                <li>
                  <Link href="#!">SEO and ASO Chrome Add On</Link>
                </li>
                <li>
                  <Link href="#!">Bulk Page Speed Assessment</Link>
                </li>
                <li>
                  <Link href="#!">iOS Keyword Tracker</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-16 mb-30">
              <h5 className="mb-10 color-brand-1"></h5>
              <ul className="menu-footer">
                <li>
                  {" "}
                  <Link href="#!">Android Rating Projection Tool</Link>
                </li>
                <li>
                  {" "}
                  <Link href="#!">Html Editor</Link>
                </li>
                <li>
                  {" "}
                  <Link href="#!">Website Rank Checker</Link>
                </li>
                <li>
                  {" "}
                  <Link href="#!">Emi Calculator</Link>
                </li>
                <li>
                  {" "}
                  <Link href="#!">Word To Html</Link>
                </li>
                <li>
                  {" "}
                  <Link href="#!">Font Changer</Link>
                </li>
                <li>
                  {" "}
                  <Link href="#!">Multi Tool</Link>
                </li>
                <li>
                  {" "}
                  <Link href="#!">Keyword Suggestion</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-23">
              <div>
                <p className="font-sm color-grey-400">
                  Our mission is to leverage technology and data science to
                  maximize your app's organic users.
                </p>
                <div className="mt-20">
                  <Link className="mr-10" href="#">
                    <Image
                      src="assets/imgs/template/download 1.svg"
                      alt="Description of the image"
                      width={220}
                      height={82}
                    />
                  </Link>
                </div>
                <ul className="menu-footer">
                  <li>
                    <a className="font-sm color-grey-400 " href={"/contact"}>
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#"  className="font-sm color-grey-400 ">
                      Request Access to Free Tools Suite
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-sm color-grey-400">
                      Data Studio Connector For PlayStore
                    </a>
                  </li>
                </ul>
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
                    <Link
                      className="font-sm color-grey-300"
                      href="term-conditions.html"
                    >
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-sm color-grey-300"
                      href="term-conditions.html"
                    >
                      Cookies
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-sm color-grey-300"
                      href="term-conditions.html"
                    >
                      Terms of service
                    </Link>
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

export default Footer;
