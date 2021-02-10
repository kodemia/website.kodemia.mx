// My components
import AlliancesKodemia from 'components/Pages/Home/AlliancesKodemia'
import CollaborateWithKodemia from 'components/Pages/Companies/CollaborateWithKodemia'
import FindKoder from 'components/Pages/Companies/FindKoder'
import Footer from 'components/Footer'
import Hero from 'components/Pages/Companies/Hero'
import Navbar from 'components/Navbar'
import NextDeveloper from 'components/Pages/Companies/NextDeveloper'
import Seo from 'components/SEO'
import TalentDevelopment from 'components/Pages/Companies/TalentDevelopment'

// Data
import AlliesData from 'config/allies-data.json'
import IdealKoder from 'config/companies/ideal-koder.json'
import TalentData from 'config/companies/talent-data.json'

export default function Empresas () {
  return (
    <>
      <Seo />
      <Navbar />
      <Hero />
      <TalentDevelopment infoCards={TalentData.cards} />
      <FindKoder detail={IdealKoder.cards} image={IdealKoder.image} infoCards={IdealKoder.cards} />
      <CollaborateWithKodemia />
      <AlliancesKodemia allies={AlliesData} isBlack />
      <NextDeveloper />
      <Footer />
    </>
  )
}