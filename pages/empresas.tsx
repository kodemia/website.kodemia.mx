// My components
import AlliancesKodemia from 'components/Pages/Home/AlliancesKodemia'
import FindKoder from 'components/Pages/Companies/FindKoder'
import Footer from 'components/Footer'
import Hero from 'components/Pages/Companies/Hero'
import Navbar from 'components/Navbar'
import NextDeveloper from 'components/Pages/Companies/NextDeveloper'
import Seo from 'components/SEO'
import TalentDevelopment from 'components/Pages/Companies/TalentDevelopment'
// Data
import AlliesData from 'config/allies-data.json'
import TalentData from 'config/companies/talent-data.json'

export default function Empresas () {
  return (
    <>
      <Seo />
      <Navbar />
      <Hero />
      <FindKoder />
      <TalentDevelopment infoCards={TalentData.cards} />
      <AlliancesKodemia allies={AlliesData} isBlack />
      <NextDeveloper />
      <Footer />
    </>
  )
}
