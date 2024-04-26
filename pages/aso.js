import Layout from "../components/layout/Layout";
import Hero from "../components/aso/Hero";
import Testimonials from "../components/home/Testimonials";
import Tools from "../components/home/Tools";
import Service8 from "../components/home/Service8";
import SEOTrustBy from "../components/seo/seoTrustBy";
import Asocontact from "../components/aso/Asocontact";
import Services5 from "../components/aso/Services5";
import Asomarketing from "../components/aso/Asomarketing";
import Asomarketing4 from "../components/aso/Asomarking4";
import AsoSection6 from "../components/aso/AsoSection6";
import Head from "next/head";
const ASO = () => {
  return (
    <>
      <Head>
        <title>App Store Optimization</title>
      </Head>
      <Layout>
        <Hero />
        <SEOTrustBy />
        <Service8 category={"App's"} />
        <Testimonials />
        <Asomarketing4 />
        <AsoSection6 />
        <Tools length={6} />
        <Services5 />
        <Asomarketing />
        <Asocontact />
      </Layout>
    </>
  );
};

export default ASO;
