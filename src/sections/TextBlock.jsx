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
      className="w-full min-h-screen flex lg:flex-row flex-col-reverse  poppins-regular"
      id="textblock-container"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-easing="ease-in-sine"
    >
      <img
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-easing="ease-in-sine"
        className="absolute -z-10 w-full"
        src={MoonIcon}
        alt=""
      />
      <div className="lg:w-1/2 flex justify-center items-center pb-24 lg:pb-0 p-32">
        <div className="lg:w-10/12 w-11/12">
          <h1 className="lg:text-5xl text-3xl poppins-bold mb-3 text-black">
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
      <div className="lg:w-1/3 flex justify-center items-center lg:-mb-32 lg:mr-20">
        <img src={VitalIcon} alt="" className="lg:w-[500px]" />
      </div>
    </div>
  );
}

export default TextBlock;
