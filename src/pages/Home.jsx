import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FooterWithSocialLinks } from '../components/Footer';
import { StickyNavbar } from '../components/Navbar';
import LandingPage from '../sections/LandingPage';
import TextBlock from '../sections/TextBlock';
import Information from '../sections/Information';
import IconLabelTabs from '../components/Tabs';
import CustomLabels from '../components/Charts';
import Introduction from '../sections/Introduction';

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
        <LandingPage />
        <TextBlock />
        <Introduction />
        <IconLabelTabs />
        <Information />
        <CustomLabels />
        <FooterWithSocialLinks />
      </div>
    </div>
  );
}

export default Home;
