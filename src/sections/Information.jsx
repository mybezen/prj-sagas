import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { PencegahanCard1 } from '../components/Card';

function Information() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
    });
    AOS.refresh();
  }, []);

  return (
    <div
      className="container flex flex-col items-center my-4 py-24"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <PencegahanCard1 />
    </div>
  );
}

export default Information;
