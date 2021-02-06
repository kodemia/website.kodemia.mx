// My components
import AlliancesKodemia from '../components/Pages/Home/AlliancesKodemia'
import Footer from 'components/Footer'
import Hero from '../components/Pages/Companies/Hero'
import Navbar from 'components/Navbar'
import Seo from '../components/SEO'
import Talent from 'components/Pages/Companies/TalentDevelopment'

// Data
import AlliesData from '../config/allies-data.json'
import TalentData from 'config/companies/talent-data.json'

export default function Empresas () {
  return (
    <>
      <Seo />
      <Navbar />
      <Hero />
      <Talent infoCards={TalentData.cards} />
      <AlliancesKodemia allies={AlliesData} isBlack />
      <Footer />
    </>
  )
}
