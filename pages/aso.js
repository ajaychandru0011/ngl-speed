import Layout from "../components/layout/Layout";
import Hero from "../components/aso/Hero";
import Testimonials from "../components/home/Testimonials";
import Tools from "../components/home/Tools";
import Service8 from "../components/home/Service8";
import SEOTrustBy from "../components/seo/seoTrustBy";
import Contact from "../components/home/Contact";
import Services5 from "../components/aso/Services5";
const ASO = () => {

  return (
    <>
      <Layout>
        <Hero />
        <div className="mt-50" />
        <SEOTrustBy />
        <Service8 category={"App's"} />
        <Testimonials />
        <Tools length={6} />
        <Services5 />
        <Contact />
      </Layout>
    </>
  );
};

export default ASO;
