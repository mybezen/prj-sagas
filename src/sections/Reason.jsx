import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import CloudTopIcon from '../assets/CloudTop.svg';
import { Typography } from "@material-tailwind/react";

// Card component
function LifestyleCard() {
  return (
    <div
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-[300px] h-[200px]"
      data-aos="fade-up"
    >
      {/* Icon Placeholder */}
      <div className="flex items-center justify-center w-16 h-16 bg-blue-800 rounded-full mb-4">
        {/* Placeholder for icon */}
        <div className="w-12 h-12 bg-gray-500 rounded"></div>
      </div>
      {/* Text Section */}
      <div className="text-center">
        <Typography variant="h6" className="font-semibold text-black">
          Gaya Hidup Sedari
        </Typography>
        <Typography variant="small" className="text-gray-600">
          Kurangnya olahraga dan kebiasaan duduk terlalu lama menyebabkan obesitas, stroke, hipertensi, dan diabetes.
        </Typography>
      </div>
    </div>
  );
}

function Reason() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      {/* Cloud Image */}
      <img className="w-full" src={CloudTopIcon} alt="Cloud Top" />
      
      {/* Gradient Background and Content */}
      <div className="w-full min-h-screen bg-gradient-to-b from-dr-bl to-sky-bl py-16">
        
        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <Typography variant="h3" className="font-bold text-white">
            Penyebab
          </Typography>
          <Typography variant="body1" className="text-white">
            Berikut adalah penyebab dari kurangnya aktivitas fisik
          </Typography>
        </div>
        
        {/* Cards Container */}
        <div className="flex justify-center space-x-8">
          {/* Three cards */}
          <LifestyleCard />
          <LifestyleCard />
          <LifestyleCard />
        </div>
      </div>
    </div>
  );
}

export default Reason;
