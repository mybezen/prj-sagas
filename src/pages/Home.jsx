import { FooterWithSocialLinks } from '../components/Footer';
import { StickyNavbar } from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import LandingPage from '../sections/LandingPage';
import TextBlock from '../sections/TextBlock';
import { SimpleCard } from '../components/Card';
import IconLabelTabs from '../components/Tabs';

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
      <div className="container bg-amber-400 flex flex-col items-center my-4">
        <IconLabelTabs />
      </div>
      <div
        className="container flex flex-col items-center bg-stone-700 my-4 pt-24"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <SimpleCard />
        <div className="mt-5 pb-10">Materi 1</div>
        <div className="pb-10">Materi 2</div>
      </div>
      <FooterWithSocialLinks />
    </div>
  );
}

export default Home;
