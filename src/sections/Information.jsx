import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { PencegahanCard1, PencegahanCard2, PencegahanCard3, PencegahanCard4 } from '../components/Card';
import CloudIcon from '../assets/CloudBottom.svg';
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
    <div className='flex flex-col'>
      <img className='absolute w-full' src={CloudIcon} alt="" />
      <div className="container pt-[32rem] pb-16 flex justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="700">
        {/* Left Side: DoctIcon */}
        <div className="flex-none">
          <img src={DoctIcon} alt="Doctor Icon" className="max-w-full h-auto" />
        </div>
        
        {/* Right Side: Cards */}
        <div className='flex flex-col items-center p-[3rem] space-y-6'>
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
