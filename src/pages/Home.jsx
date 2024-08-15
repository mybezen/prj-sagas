import { ButtonDefault } from '../components/Button';
import { DrawerWithForm } from '../components/Drawer';
import { FooterWithSocialLinks } from '../components/Footer';
import { StickyNavbar } from '../components/Navbar';

function Home() {
  return (
    <div className="container">
      <StickyNavbar />
      <div className="mt-5">
        <ButtonDefault />
        <div className="mt-5 mb-5 items-center">
          <DrawerWithForm />
        </div>
      </div>
      <FooterWithSocialLinks />
    </div>
  );
}

export default Home;
