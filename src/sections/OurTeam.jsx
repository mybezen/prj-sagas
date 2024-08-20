import { AmriCard, AripCard, BintangCard, FadhlanCard, SultanCard } from "../components/BioCard"


function OurTeam() {
  return (
    <div className="container">
    <h1 className="poppins-bold text-3xl text-center m-8">Our Team</h1>
    <div className="flex gap-3 items-center">
        <SultanCard />
        <FadhlanCard />
        <AmriCard />
        <AripCard />
        <BintangCard />
    </div>
    </div>
  )
}

export default OurTeam
