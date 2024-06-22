import Layout from "../components/layout/Layout";
import Contact from "../components/home/Contact";
import Service8 from "../components/home/Service8";
import PageHead from "../components/elements/PageHead";
import dynamic from "next/dynamic";

const DynamicTrustBy = dynamic(()=>import("../components/home/Trustby",{ssr:false}))
const DynamicSeoHero = dynamic( ()=> import("../components/seo/seoHero"),{ssr:false})
const DynamicTestimonials = dynamic( ()=> import("../components/home/Testimonials"),{ssr:false})
const DynamicSEOSection3 = dynamic( ()=> import("../components/seo/seoSection3"),{ssr:false})
const DynamicSEOSection4 = dynamic( ()=> import("../components/seo/seoSection4"),{ssr:false})
const DynamicSEOSection5 = dynamic( ()=> import("../components/seo/seoSection5"),{ssr:false})
const DynamicSEOSection6 = dynamic( ()=> import("../components/seo/seoSection6"),{ssr:false})

const SEO = () => {
  return (
    <>
      <PageHead
        title={"Increase Visibility & Traffic with Our SEO Solutions"}
      />
      <Layout>
        <DynamicSeoHero />
        <DynamicTrustBy heading = {"Brands we’ve helped grow"}/>
        <Service8 category={"Website's"} />
        <DynamicTestimonials />
        <DynamicSEOSection3 />
        <DynamicSEOSection4 />
        <DynamicSEOSection5 />
        <DynamicSEOSection6 />
        <Contact />
      </Layout>
    </>
  );
};

export default SEO;
