import Hero from "../components/home/Hero";

import Layout from "../components/layout/Layout";
import PageHead from "../components/elements/PageHead";
import dynamic from "next/dynamic";

export default function Home() {
  const DynamicTrustby = dynamic(() => import("../components/home/Trustby"));

  const DynamicOurServices = dynamic(() =>
    import("../components/home/OurServices")
  );
  const DynamicTestimonials = dynamic(() =>
    import("../components/home/Testimonials")
  );
  const DynamicTools = dynamic(() => import("../components/home/Tools"));
  const DynamicServices = dynamic(() => import("../components/home/Services"));
  const DynamicMarketing = dynamic(() =>
    import("../components/home/Marketing")
  );
  const DynamicContact = dynamic(() => import("../components/home/Contact"));
  return (
    <>
      <PageHead
        title={"NextGrowthLabs - Best App Store Optimization Platform"}
      />
      <Layout>
        <Hero />
        <DynamicTrustby />
        <DynamicOurServices />
        <DynamicTestimonials />
        <DynamicTools />
        <DynamicServices />
        <DynamicMarketing />
        <DynamicContact />
      </Layout>
    </>
  );
}
