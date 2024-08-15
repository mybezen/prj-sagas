import { ButtonDefault } from "../components/Button"
import { DrawerWithForm } from "../components/Drawer"
import { FooterWithSocialLinks } from "../components/Footer"
import { NavbarSimple } from "../components/Navbar"

function Home() {
  return (
    <div className="container mt-5 ">
      <NavbarSimple/>
      <ButtonDefault /> 
      <div className="mt-5 mb-5 items-center">
      <DrawerWithForm />
      </div>
      <FooterWithSocialLinks />
    </div>
  )
}

export default Home
