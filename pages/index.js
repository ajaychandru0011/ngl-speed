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
import dynamic from "next/dynamic"
import PageHead from "../components/elements/PageHead"

// Use dynamic imports for each component
const Hero = dynamic(() => import("../components/home/Hero"))
const Marketing = dynamic(() => import("../components/home/Marketing"))
const OurServices = dynamic(() => import("../components/home/OurServices"))
const Services = dynamic(() => import("../components/home/Services"))
const Testimonials = dynamic(() => import("../components/home/Testimonials"))
const Tools = dynamic(() => import("../components/home/Tools"))
const Trustby = dynamic(() => import("../components/home/Trustby"))
const Contact = dynamic(() => import("../components/home/Contact"))
const Layout = dynamic(() => import("../components/layout/Layout"))

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
  )
}
