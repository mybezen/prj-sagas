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
            <div className='aos-item' id="textblock-container" data-aos="zoom-out"  data-aos-anchor-placement="top-center">
                <h1 id="textblock-title text-9xl font-extrabold">What is VitalMotion?</h1>
                <p id="textblock-content">
                VitalMotion<br/><br/>
                Kami Adalah<br/><br/>
                Tim<br/><br/>
                Vital Motion
                </p>
            </div>

        </div>
    );
}

export default TextBlock;