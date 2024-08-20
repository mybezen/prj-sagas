import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import LandingIcon from '../assets/LandingHospital.svg';

function LandingPage() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
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
      <div className="lg:w-5/12 flex justify-center items-center lg:mt-10 lg:mr-20 lg:mb-0 mb-14">
        <img src={LandingIcon} alt="" className="lg:w-[440px] w-8/12" />
      </div>
      <div className="lg:w-7/12 w-full px-10 flex justify-center items-center pb-24 lg:pb-0 lg:pl-20">
        <div className="lg:w-10/12 w-full lg:mt-0 mt-10">
          <h1 className="lg:text-5xl text-4xl poppins-semibold lg:mb-3 mb-1 text-black">
            Beberapa masyarakat indonesia tidak menyadari bahwa{' '}
            <span className="text-lune-blue">
              kesehatan fisik{' '}
              <span className="text-black">itu penting untuk tubuh mereka</span>
            </span>
            ?
          </h1>
          <p className="poppins-regular lg:text-2xl text-xl">
            <span className="text-black">
              Seseorang yang dikatakan sehat apabila tidak merasakan sakit atau
              keluhan dan memang secara objektif tidak tampak sakit
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
