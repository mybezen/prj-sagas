import { ButtonDefault } from "../components/Button"
import { DrawerWithForm } from "../components/Drawer"
import { FooterWithSocialLinks } from "../components/Footer"

function Home() {
  return (
    <div className="container mt-5 ">
      <ButtonDefault /> 
      <DrawerWithForm />
      <FooterWithSocialLinks />
    </div>
  )
}

export default Home
