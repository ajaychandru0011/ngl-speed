import ASOsection1 from "../components/asoSection1";
import Marketing from "../components/marketing";
import Section3 from "../components/section3";
import Section4 from "../components/section4";
import Section5 from "../components/section5";
import Section6 from "../components/section6";

export default function Home() {
  const [openClass, setOpenClass] = useState("");

  const handleOpen = () => {
    document.body.classList.add("mobile-menu-active");
    setOpenClass("sidebar-visible");
  };

  const handleRemove = () => {
    if (openClass === "sidebar-visible") {
      setOpenClass("");
      document.body.classList.remove("mobile-menu-active");
    }
  };
  return (
    <>
      <Header
        handleOpen={handleOpen}
        handleRemove={handleRemove}
        openClass={openClass}
        addClass="header-home7"
      />
      <Sidebar openClass={openClass} />
      <Hero />
      <Trustby />
      <OurServices />
      <Testimonials />
      <Tools />
      <Services />
      <Marketing />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <ASOsection1 />
    </>
  );
}
