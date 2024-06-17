import dynamic from "next/dynamic";
import PageHead from "../components/elements/PageHead";

// Use dynamic imports for each component
const Layout = dynamic(() => import("../components/layout/Layout"));
const Hero = dynamic(() => import("../components/aso/Hero"));
const Testimonials = dynamic(() => import("../components/home/Testimonials"));
const Tools = dynamic(() => import("../components/home/Tools"));
const Service8 = dynamic(() => import("../components/home/Service8"));
const Asocontact = dynamic(() => import("../components/aso/Asocontact"));
const TrustBy = dynamic(() => import("../components/home/Trustby"));
const Services5 = dynamic(() => import("../components/aso/Services5"));
const Asomarketing = dynamic(() => import("../components/aso/Asomarketing"));
const Asomarketing4 = dynamic(() => import("../components/aso/Asomarking4"));
const AsoSection6 = dynamic(() => import("../components/aso/AsoSection6"));
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient()

const ASO = () => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <PageHead title={"Get Free ASO Analysis - NextGrowthLabs"} />
      <Layout>
        <Hero />
        <TrustBy />
        <Service8 category={"App's"} />
        <Testimonials />
        <Asomarketing4 />
        <AsoSection6 />
        <Tools length={6} />
        <Services5 />
        <Asomarketing />
        <Asocontact />
      </Layout>
      </QueryClientProvider>
    </>
  );
};

export default ASO;
