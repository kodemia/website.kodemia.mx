import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Talent from 'components/Pages/Companies/TalentDevelopment'
import Transform from 'components/Pages/Home/TransformYourLife'

import TalentData from 'config/companies/talent-data.json'

export default function Empresas () {
  return (
    <>
      <Navbar />
      <Transform />
      <Talent infoCards={TalentData.cards} />
      <Footer />
    </>
  )
}
