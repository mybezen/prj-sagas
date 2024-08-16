import { DrawerWithForm } from "../components/Drawer";
import { FooterWithSocialLinks } from "../components/Footer";
import { StickyNavbar } from "../components/Navbar";

function Home() {
  return (
    <div className="">
      <StickyNavbar />
      <div className="container">
        <DrawerWithForm />
        <FooterWithSocialLinks />
      </div>
    </div>
  );
}

export default Home;
