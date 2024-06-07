// import Hero from "../components/home/Hero";

// import Layout from "../components/layout/Layout";
// import PageHead from "../components/elements/PageHead";
// import dynamic from "next/dynamic";
// import Script from "next/script";

// export default function Home() {
//   const DynamicTrustby = dynamic(() => import("../components/home/Trustby"));

//   const DynamicOurServices = dynamic(() =>
//     import("../components/home/OurServices")
//   );
//   const DynamicTestimonials = dynamic(() =>
//     import("../components/home/Testimonials")
//   );
//   const DynamicTools = dynamic(() => import("../components/home/Tools"));
//   const DynamicServices = dynamic(() => import("../components/home/Services"));
//   const DynamicMarketing = dynamic(() =>
//     import("../components/home/Marketing")
//   );
//   const DynamicContact = dynamic(() => import("../components/home/Contact"));
//   const DynamicFooter = dynamic(() => import("../components/layout/Footer"));

//   return (
//     <>
//       <PageHead
//         title={"NextGrowthLabs - Best App Store Optimization Platform"}
//       />
//       <Layout>
//         <Hero />
//         <DynamicTrustby />
//         <DynamicOurServices />
//         <DynamicTestimonials />
//         <DynamicTools />
//         <DynamicServices />
//         <DynamicMarketing />
//         <DynamicContact />
//         <DynamicFooter />
//       </Layout>
//     </>
//   );
// }
import Hero from "../components/home/Hero";
import Marketing from "../components/home/Marketing";
import OurServices from "../components/home/OurServices";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import Tools from "../components/home/Tools";
import Trustby from "../components/home/Trustby";
import Contact from "../components/home/Contact";
import Layout from "../components/layout/Layout";
import PageHead from "../components/elements/PageHead";

export default function Home() {
  return (
    <>
      <PageHead
        title={"NextGrowthLabs - Best App Store Optimization Platform"}
      />
      <Layout>
        <Hero />

        <Trustby />

        <OurServices />
        <Testimonials />
        <Tools />
        <Services />
        <Marketing />
        <Contact />
      </Layout>
    </>
  );
}
