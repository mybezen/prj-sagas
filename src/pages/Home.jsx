import { FooterWithSocialLinks } from "../components/Footer";
import { StickyNavbar } from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LandingPage from "../sections/LandingPage";
import TextBlock from "../sections/TextBlock";
import { SimpleCard } from "../components/Card";
import IconLabelTabs from "../components/Tabs";

function Home() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
      mirror: true
    });
  }, []);
  return (
    <div className="">
      <LandingPage />
      <StickyNavbar />
      <div className="container items-center bg-green-900"  data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-easing="ease-in-sine"
            data-aos-anchor-placement="top-center">
        <TextBlock />
      </div>
      <div className="container flex flex-col items-center bg-stone-700 " data-aos="fade-up"
     data-aos-duration="3000">
        <SimpleCard />
        <div
          className="mt-5 pb-10"
        >
        <IconLabelTabs />
            Materi 1
        </div>
        <div className="pb-10">
            Materi 2
        </div>
      </div>
      <FooterWithSocialLinks />
    </div>
  );
}

export default Home;
