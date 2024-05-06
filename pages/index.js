import Hero from "../components/home/Hero";

import Layout from "../components/layout/Layout";
import PageHead from "../components/elements/PageHead";
import React, { Suspense, lazy } from "react";

export default function Home() {
  const DynamicTrustby = lazy(() => import("../components/home/Trustby"));

  const DynamicOurServices = lazy(() =>
    import("../components/home/OurServices")
  );
  const DynamicTestimonials = lazy(() =>
    import("../components/home/Testimonials")
  );
  const DynamicTools = lazy(() => import("../components/home/Tools"));
  const DynamicServices = lazy(() => import("../components/home/Services"));
  const DynamicMarketing = lazy(() => import("../components/home/Marketing"));
  const DynamicContact = lazy(() => import("../components/home/Contact"));
  return (
    <>
      <PageHead
        title={"NextGrowthLabs - Best App Store Optimization Platform"}
      />
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <DynamicTrustby />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          {" "}
          <DynamicOurServices />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          {" "}
          <DynamicTestimonials />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          {" "}
          <DynamicTools />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          {" "}
          <DynamicServices />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          {" "}
          <DynamicMarketing />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          {" "}
          <DynamicContact />
        </Suspense>
      </Layout>
    </>
  );
}
