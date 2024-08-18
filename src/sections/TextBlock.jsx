import './TextBlock.css'
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function TextBlock() {
    useEffect(() => {
        AOS.init({
        once: false,
          duration: 500,
          mirror: true,
        })
        AOS.refresh() ;
      }, []);
    return (
        <div id="textblock">
            <div className='aos-item' id="textblock-container">
                <h1 className='text-9xl poppins-bold' id="textblock-title">What is VitalMotion?</h1>
                <p id="textblock-content" className='poppins-semibold'>
                VitalMotion adalah website yang menyediakan informasi tentang pentingnya aktivitas fisik untuk kesehatan tubuh, kami menjelaskan tentang bahaya nya jika kita tidak melakukan aktivitas fisik,serta cara mencegah nya
                </p>
            </div>

        </div>
    );
}

export default TextBlock;