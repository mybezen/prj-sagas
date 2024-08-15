import "./MotionTest.css";
import { Slide } from "../components/Slide.tsx";

function MotionTest() {
  return (
    <main>
      <section id="section1">
        <Slide>
        <h1>Section One</h1>
        <p>Hey! I am the first section</p>
        <a href="#section2">Scroll to 2</a>
        </Slide>
      </section>
      <section id="section2">
        <Slide>
        <h1>Section Two</h1>
        <p>Hey! I am the second section</p>
        <a href="#section3">Scroll to 3</a>
            </Slide>
      </section>
      <section id="section3">
        <Slide>

        <h1>Section Three</h1>
        <p>Hey! I am the third section</p>
        <a href="/">Scroll to Top</a>
        </Slide>
      </section>
    </main>
  );
}

export default MotionTest;