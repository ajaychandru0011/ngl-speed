import Hero from "../components/home/Hero";

import Layout from "../components/layout/Layout";
import PageHead from "../components/elements/PageHead";
import dynamic from "next/dynamic";
import Script from "next/script";

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
  const DynamicFooter = dynamic(() => import("../components/layout/Footer"));

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
        <DynamicFooter />
      </Layout>
      <Script id="show-banner">
        {` let observer = new IntersectionObserver(
    (entries, o) => {
      entries.forEach((entry) => {
        let el = entry.target;
        console.log("entry",entry)
        // Not currently in intersection area.
        if (entry.intersectionRatio == 0) {
          return;
        }
        // Trigger rendering for elements within
        // scroll area that haven't already been
        // marked.
        if (!el.markedVisible) {
          el.attributeStyleMap.set(
            "content-visibility",
            "visible"
          );
          el.markedVisible = true;
        }
      });
    },
    // Set a rendering "skirt" 50px above
    // and 100px below the main scroll area.
    { rootMargin: "50px 0px 100px 0px" }
  );

  let els =
    document.querySelectorAll(".section");
    console.log("content",els)
  els.forEach((el) => { observer.observe(el); });`}
      </Script>
    </>
  );
}
