import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import VitalIcon from '../assets/VitalMotion.svg';
import MoonIcon from '../assets/MoonIntroduction.svg';

function TextBlock() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
      mirror: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div
      className="w-full min-h-screen flex lg:flex-row mt-20 lg:mt-0 flex-col-reverse poppins-regular"
      id="textblock-container"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-easing="ease-in-sine"
    >
      <img
        data-aos-duration="1200"
        data-aos-easing="ease-in-sine"
        className="absolute -z-10 w-full lg:block hidden"
        src={MoonIcon}
        alt=""
      />
      <div className="lg:w-7/12 w-full px-10 flex justify-center items-center pb-24 lg:pb-0 lg:pl-20">
        <div className="lg:w-10/12 w-full lg:mt-0 mt-10">
          <h1 className="lg:text-5xl text-4xl poppins-bold lg:mb-3 mb-1 text-black">
            What is{' '}
            <span className="text-lune-blue">
              Vital<span className="text-gr-blue">Motion</span>
            </span>
            ?
          </h1>
          <p className="poppins-regular lg:text-2xl text-xl">
            <span className="text-lune-blue poppins-bold">
              Vital<span className="text-gr-blue poppins-bold">Motion </span>
            </span>
            <span className="text-black">
              adalah situs web yang memberikan informasi tentang pentingnya
              aktivitas fisik untuk kesehatan tubuh, risiko akibat kurangnya
              aktivitas, dan cara pencegahannya.
            </span>
          </p>
        </div>
      </div>
      <div className="lg:w-5/12 flex justify-center items-center lg:mt-10 lg:mr-20 lg:mb-0 mb-14">
        <img src={VitalIcon} alt="" className="lg:w-[440px] w-7/12" />
      </div>
    </div>
  );
}

export default TextBlock;
