import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Reason() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
    AOS.refresh();
  }, []);

  return <div className="w-full min-h-screen"></div>;
}

export default Reason;
