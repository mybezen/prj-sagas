import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function LandingPage() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    })
    AOS.refresh() ;
  }, []);
  return (
    <div className="aos-item" data-aos="fade-up" data-aos-duration="1200" data-aos-mirror="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.dev/svgjs"
        width="1440"
        height="200"
        preserveAspectRatio="none"
        viewBox="0 0 1440 200"
        className="w-full bottom-0 absolute"
      >
        <g mask='url("#SvgjsMask1139")' fill="none">
          <path
            d="M 0,27 C 144,51.4 432,142.8 720,149 C 1008,155.2 1296,76.2 1440,58L1440 200L0 200z"
            fill="rgba(24, 74, 126, 1)"
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1139">
            <rect width="1440" height="200" fill="#ffffff"></rect>
          </mask>
        </defs>
      </svg>
      <div className="w-full h-screen"></div>
    </div>
  );
}

export default LandingPage;
