import { FooterWithSocialLinks } from "../components/Footer";
import { StickyNavbar } from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LandingPage from "../sections/LandingPage";
import TextBlock from "../sections/TextBlock";
import { SimpleCard } from "../components/Card";

function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
    });
  }, []);
  return (
    <div className="">
      <LandingPage />
      <StickyNavbar />
      <TextBlock />
      <div className="container">
        <SimpleCard />
        <div
          className="mt-5 pb-10"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          totam corrupti ea quia unde delectus dolores quod hic ex distinctio.
          Natus doloremque recusandae ipsa quo a aliquam sed deserunt quos
          voluptas? Ullam temporibus nostrum quam modi sit, expedita cumque
          quidem ducimus praesentium, qui, illum harum. Dolor reprehenderit quis
          laboriosam. Iusto earum eaque tenetur amet porro. Saepe voluptas neque
          rem officia molestias animi accusamus ex sed sunt, excepturi ratione
          laudantium quibusdam id totam est minus rerum, ipsam distinctio vero
          unde eius! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem totam corrupti ea quia unde delectus dolores quod hic ex
          distinctio. Natus doloremque recusandae ipsa quo a aliquam sed
          deserunt quos voluptas? Ullam temporibus nostrum quam modi sit,
          expedita cumque quidem ducimus praesentium, qui, illum harum. Dolor
          reprehenderit quis laboriosam. Iusto earum eaque tenetur amet porro.
          Saepe voluptas neque rem officia molestias animi accusamus ex sed
          sunt, excepturi ratione laudantium quibusdam id totam est minus rerum,
          ipsam distinctio vero unde eius! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatem totam corrupti ea quia unde
          delectus dolores quod hic ex distinctio. Natus doloremque recusandae
          ipsa quo a aliquam sed deserunt quos voluptas? Ullam temporibus
          nostrum quam modi sit, expedita cumque quidem ducimus praesentium,
          qui, illum harum. Dolor reprehenderit quis laboriosam. Iusto earum
          eaque tenetur amet porro. Saepe voluptas neque rem officia molestias
          animi accusamus ex sed sunt, excepturi ratione laudantium quibusdam id
          totam est minus rerum, ipsam distinctio vero unde eius! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Voluptatem totam corrupti
          ea quia unde delectus dolores quod hic ex distinctio. Natus doloremque
          recusandae ipsa quo a aliquam sed deserunt quos voluptas? Ullam
          temporibus nostrum quam modi sit, expedita cumque quidem ducimus
          praesentium, qui, illum harum. Dolor reprehenderit quis laboriosam.
          Iusto earum eaque tenetur amet porro. Saepe voluptas neque rem officia
          molestias animi accusamus ex sed sunt, excepturi ratione laudantium
          quibusdam id totam est minus rerum, ipsam distinctio vero unde eius!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          totam corrupti ea quia unde delectus dolores quod hic ex distinctio.
          Natus doloremque recusandae ipsa quo a aliquam sed deserunt quos
          voluptas? Ullam temporibus nostrum quam modi sit, expedita cumque
          quidem ducimus praesentium, qui, illum harum. Dolor reprehenderit quis
          laboriosam. Iusto earum eaque tenetur amet porro. Saepe voluptas neque
          rem officia molestias animi accusamus ex sed sunt, excepturi ratione
          laudantium quibusdam id totam est minus rerum, ipsam distinctio vero
          unde eius! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem totam corrupti ea quia unde delectus dolores quod hic ex
          distinctio. Natus doloremque recusandae ipsa quo a aliquam sed
          deserunt quos voluptas? Ullam temporibus nostrum quam modi sit,
          expedita cumque quidem ducimus praesentium, qui, illum harum. Dolor
          reprehenderit quis laboriosam. Iusto earum eaque tenetur amet porro.
          Saepe voluptas neque rem officia molestias animi accusamus ex sed
          sunt, excepturi ratione laudantium quibusdam id totam est minus rerum,
          ipsam distinctio vero unde eius!
        </div>
        <div className="pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          totam corrupti ea quia unde delectus dolores quod hic ex distinctio.
          Natus doloremque recusandae ipsa quo a aliquam sed deserunt quos
          voluptas? Ullam temporibus nostrum quam modi sit, expedita cumque
          quidem ducimus praesentium, qui, illum harum. Dolor reprehenderit quis
          laboriosam. Iusto earum eaque tenetur amet porro. Saepe voluptas neque
          rem officia molestias animi accusamus ex sed sunt, excepturi ratione
          laudantium quibusdam id totam est minus rerum, ipsam distinctio vero
          unde eius! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem totam corrupti ea quia unde delectus dolores quod hic ex
          distinctio. Natus doloremque recusandae ipsa quo a aliquam sed
          deserunt quos voluptas? Ullam temporibus nostrum quam modi sit,
          expedita cumque quidem ducimus praesentium, qui, illum harum. Dolor
          reprehenderit quis laboriosam. Iusto earum eaque tenetur amet porro.
          Saepe voluptas neque rem officia molestias animi accusamus ex sed
          sunt, excepturi ratione laudantium quibusdam id totam est minus rerum,
          ipsam distinctio vero unde eius! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatem totam corrupti ea quia unde
          delectus dolores quod hic ex distinctio. Natus doloremque recusandae
          ipsa quo a aliquam sed deserunt quos voluptas? Ullam temporibus
          nostrum quam modi sit, expedita cumque quidem ducimus praesentium,
          qui, illum harum. Dolor reprehenderit quis laboriosam. Iusto earum
          eaque tenetur amet porro. Saepe voluptas neque rem officia molestias
          animi accusamus ex sed sunt, excepturi ratione laudantium quibusdam id
          totam est minus rerum, ipsam distinctio vero unde eius! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Voluptatem totam corrupti
          ea quia unde delectus dolores quod hic ex distinctio. Natus doloremque
          recusandae ipsa quo a aliquam sed deserunt quos voluptas? Ullam
          temporibus nostrum quam modi sit, expedita cumque quidem ducimus
          praesentium, qui, illum harum. Dolor reprehenderit quis laboriosam.
          Iusto earum eaque tenetur amet porro. Saepe voluptas neque rem officia
          molestias animi accusamus ex sed sunt, excepturi ratione laudantium
          quibusdam id totam est minus rerum, ipsam distinctio vero unde eius!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          totam corrupti ea quia unde delectus dolores quod hic ex distinctio.
          Natus doloremque recusandae ipsa quo a aliquam sed deserunt quos
          voluptas? Ullam temporibus nostrum quam modi sit, expedita cumque
          quidem ducimus praesentium, qui, illum harum. Dolor reprehenderit quis
          laboriosam. Iusto earum eaque tenetur amet porro. Saepe voluptas neque
          rem officia molestias animi accusamus ex sed sunt, excepturi ratione
          laudantium quibusdam id totam est minus rerum, ipsam distinctio vero
          unde eius! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem totam corrupti ea quia unde delectus dolores quod hic ex
          distinctio. Natus doloremque recusandae ipsa quo a aliquam sed
          deserunt quos voluptas? Ullam temporibus nostrum quam modi sit,
          expedita cumque quidem ducimus praesentium, qui, illum harum. Dolor
          reprehenderit quis laboriosam. Iusto earum eaque tenetur amet porro.
          Saepe voluptas neque rem officia molestias animi accusamus ex sed
          sunt, excepturi ratione laudantium quibusdam id totam est minus rerum,
          ipsam distinctio vero unde eius!
        </div>
      </div>
      <FooterWithSocialLinks />
    </div>
  );
}

export default Home;
