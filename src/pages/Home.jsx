import { ButtonDefault } from '../components/Button';
import { DrawerWithForm } from '../components/Drawer';
import { FooterWithSocialLinks } from '../components/Footer';
import { StickyNavbar } from '../components/Navbar';

function Home() {
  return (
    <div className="container">
      <div className="">
        <div className="mb-5 items-center">
          <StickyNavbar />
          <DrawerWithForm />
        </div>
      </div>
      <FooterWithSocialLinks />
    </div>
  );
}

export default Home;
