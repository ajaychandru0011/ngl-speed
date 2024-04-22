import Header from "../components/Header";
import Hero from "../components/Hero";
import Trustby from '../components/Trustby'
import ASOsection1 from "../components/asoSection1";
import OurServices from "../components/OurServices";
import Testimonials from "../components/Testimonials";
import Tools from "../components/Tools";
import Services from "../components/Services";
import Marketing from "../components/Marketing";
import Footer from "../components/Footer";
import BackToTop from "../components/elements/BackToTop";
import Contact from '../components/elements/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Trustby />
      <OurServices />
      <Testimonials />
      <Tools />
      <Services />
      <Marketing />
      {/* <ASOsection1 /> */}
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
