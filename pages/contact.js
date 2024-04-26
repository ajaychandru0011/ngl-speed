import React from "react";
import Link from "next/link";
import Head from "next/head";
import Contact from "../components/home/Contact";
import NewsLetter from "../components/elements/Newsletter";
import Layout from "../components/layout/Layout";
const Contactus = () => {
  return (
    <>
      <Head>
        <title>Contact Us for better coordination and more info.</title>
      </Head>
      <Layout>
        <section className="section banner-contact">
          <div className="container">
            <div className="banner-1">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <span className="title-line line-48">Get in Touch</span>
                  <h1 className="color-brand-1 mb-20 mt-10">
                    We’d love to hear
                    <br className="d-none d-lg-block" />
                    from you.
                  </h1>
                  <div className="row">
                    <div className="col-lg-9">
                      <p className="font-md color-grey-500">
                        Request a demo, ask a question, or get in touch here. If
                        you’re interested in working at Iori Coporation, check
                        out our
                        <Link className="ml-3" href="/career">
                          {" "}
                          careers page.
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="box-banner-contact">
                    <img src="assets/imgs/page/contact/banner.png" alt="iori" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Contact />
        <NewsLetter />
      </Layout>
    </>
  );
};

export default Contactus;
