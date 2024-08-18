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
    <div id="textblock">
      <div id="textblock-container"></div>
    </div>
  );
}

export default TextBlock;
