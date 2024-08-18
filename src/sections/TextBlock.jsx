import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

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
      className="w-full h-screen flex"
      id="textblock-container"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-easing="ease-in-sine"
      data-aos-anchor-placement="top-center"
    >
      <div className="lg:w-1/2 flex justify-center items-center lg:ml-24">
        <div className="w-10/12">
          <h1 className="text-5xl poppins-bold mb-3">
            What is{' '}
            <span className="text-dark-gr">
              Vital<span className="text-lime-gr">Motion</span>
            </span>
            ?
          </h1>
          <p className="font-normal text-3xl">
            <span className="text-dark-gr poppins-bold">
              Vital<span className="text-lime-gr poppins-bold">Motion</span>
            </span>{' '}
            adalah situs web yang memberikan informasi tentang pentingnya
            aktivitas fisik untuk kesehatan tubuh, risiko akibat kurangnya
            aktivitas, dan cara pencegahannya.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 bg-slate-200 flex justify-center items-center">
        <img src="#" alt="" className="w-96 h-96 bg-gray-700 rounded-full" />
      </div>
    </div>
  );
}

export default TextBlock;
