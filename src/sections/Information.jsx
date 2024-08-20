import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {
  PencegahanCard1,
  PencegahanCard2,
  PencegahanCard3,
  PencegahanCard4,
} from '../components/Card';
import CloudIcon from '../assets/infocloud.svg';
import DoctIcon from '../assets/HaloDog.svg';

function Information() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col">
      <img className="w-full -mt-1" src={CloudIcon} alt="" />
      <div className="lg:w-1/2 w-10/12 mt-20 m-auto lg:hidden">
        <img src={DoctIcon} alt="Doctor Icon" className="max-w-full lg:ml-11" />
      </div>
      <div className="lg:pl-32 lg:pt-32 pt-10 px-10">
        <h1 className="poppins-bold lg:text-4xl text-2xl lg:w-1/2 mb-2">
          Kegiatan fisik yang dapat dilakukan dalam keseharian
        </h1>
        <p className="text-xl poppins-regular w-9/12 hidden lg:inline">
          Untuk mengatasi penyakit yang disebabkan oleh kurangnya aktivitas
          fisik, terdapat berbagai kegiatan yang dapat kita lakukan untuk
          menjaga kesehatan tubuh. Beberapa di antaranya adalah:
        </p>
        <p className="text-xl poppins-regular w-9/12 lg:hidden inline">
          Berikut adalah kegiatan yang dapat dilakukan untuk mengatasi penyakit
          yang disebabkan oleh kurangnya aktivitas fisik.
        </p>
      </div>
      <div
        className="lg:pb-16 pt-3 lg:pt-20 flex flex-col lg:flex-row justify-center items-center lg:px-10"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        {/* Left Side: DoctIcon */}
        <div className="lg:w-1/2 w-10/12 lg:block hidden">
          <img
            src={DoctIcon}
            alt="Doctor Icon"
            className="max-w-full lg:ml-11"
          />
        </div>

        {/* Right Side: Cards */}
        <div className="lg:w-1/2 flex flex-col items-center p-[3rem] space-y-3">
          <PencegahanCard1 />
          <PencegahanCard2 />
          <PencegahanCard3 />
          <PencegahanCard4 />
        </div>
      </div>
    </div>
  );
}

export default Information;
