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
      className="w-full min-h-screen flex lg:flex-row flex-col-reverse container poppins-regular"
      id="textblock-container"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-easing="ease-in-sine"
    >
      <div className="lg:w-1/2 flex justify-center items-center bg-amber-100 pb-24 lg:pb-0">
        <div className="lg:w-10/12 w-11/12">
          <h1 className="lg:text-5xl text-3xl poppins-bold mb-3">
            What is{' '}
            <span className="text-dark-gr">
              Vital<span className="text-lime-gr">Motion</span>
            </span>
            ?
          </h1>
          <p className="font-normal lg:text-3xl text-xl">
            <span className="text-dark-gr poppins-bold">
              Vital<span className="text-lime-gr poppins-bold">Motion</span>
            </span>{' '}
            adalah situs web yang memberikan informasi tentang pentingnya
            aktivitas fisik untuk kesehatan tubuh, risiko akibat kurangnya
            aktivitas, dan cara pencegahannya.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 bg-slate-200 flex justify-center items-center lg:pb-0 pb-24 pt-32 lg:pt-0">
        <img src="#" alt="" className="w-96 h-96 bg-gray-700 rounded-full" />
      </div>
    </div>
  );
}

export default TextBlock;
