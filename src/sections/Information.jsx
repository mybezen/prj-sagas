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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad
        consequuntur voluptatum voluptate soluta quaerat et enim magni
        repellendus voluptates?
      </p>
      <img className="w-full -mt-1" src={CloudIcon} alt="" />
      <div
        className="pb-16 pt-14 lg:pt-20 flex flex-col lg:flex-row justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        {/* Left Side: DoctIcon */}
        <div className="lg:w-1/2 w-10/12">
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
