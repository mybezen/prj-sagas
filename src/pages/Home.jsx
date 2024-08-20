import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FooterWithSocialLinks } from '../components/Footer';
import { StickyNavbar } from '../components/Navbar';
import TextBlock from '../sections/TextBlock';
import Information from '../sections/Information';
import IconLabelTabs from '../components/Tabs';
import Introduction from '../sections/Introduction';
import Reason from '../sections/Reason';
import Diagram from '../sections/Diagram';
import OurTeam from '../sections/OurTeam';

function Home() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
      mirror: true,
    });
  }, []);

  return (
    <div className="">
      <StickyNavbar />

      <div className="scrollable-container">
        <TextBlock />
        <Introduction />
        <IconLabelTabs />
        <Information />
        <Reason />
        <Diagram />
        <OurTeam />
        <FooterWithSocialLinks />
      </div>
    </div>
  );
}

export default Home;
