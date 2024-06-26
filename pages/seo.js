import Layout from "../components/layout/Layout";
import Testimonials from "../components/home/Testimonials";
import SEOSection3 from "../components/seo/seoSection3";
import SEOSection4 from "../components/seo/seoSection4";
import SEOSection5 from "../components/seo/seoSection5";
import Contact from "../components/home/Contact";
import SEOSection6 from "../components/seo/seoSection6";
import SEOHero from "../components/seo/seoHero";
import TrustBy from "../components/home/Trustby";
import Service8 from "../components/home/Service8";
import PageHead from "../components/elements/PageHead";

const SEO = () => {
  return (
    <>
      <PageHead
        title={"Increase Visibility & Traffic with Our SEO Solutions"}
      />
      <Layout>
        <SEOHero />
        <TrustBy />
        <Service8 category={"Website's"} />
        <Testimonials />
        <SEOSection3 />
        <SEOSection4 />
        <SEOSection5 />
        <SEOSection6 />
        <Contact />
      </Layout>
    </>
  );
};

export default SEO;
