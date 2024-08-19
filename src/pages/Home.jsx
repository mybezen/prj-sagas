import { FooterWithSocialLinks } from '../components/Footer';
import { StickyNavbar } from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import LandingPage from '../sections/LandingPage';
import TextBlock from '../sections/TextBlock';
import Information from '../sections/Information';
import IconLabelTabs from '../components/Tabs';
import BasicBars from '../components/Charts';
import CustomLabels from '../components/Charts';

function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
      mirror: true,
    });
  }, []);
  return (
    <div className="">
      <LandingPage />
      <StickyNavbar />
      <TextBlock />
      <IconLabelTabs />
      <Information />
      <CustomLabels />
      <FooterWithSocialLinks />
    </div>
  );
}

export default Home;
