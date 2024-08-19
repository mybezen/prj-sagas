import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { PencegahanCard1, PencegahanCard2, PencegahanCard3, PencegahanCard4 } from '../components/Card';
import CloudIcon from '../assets/CloudBottom.svg'
import DoctIcon from '../assets/HaloDog.svg'

function Information() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <img className='absolute' src={CloudIcon} alt="" />
      <div
        className="container pt-[32rem] pb-16 flex"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div>
          <img src={DoctIcon} alt="" />
        </div>
        <div className='flex flex-col items-center p-[3rem]'>
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
