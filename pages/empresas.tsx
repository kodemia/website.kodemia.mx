// My components
import AlliancesKodemia from 'components/Pages/Home/AlliancesKodemia'
import FindAllTalent from 'components/Pages/Companies/FindAllTalent'
import Footer from 'components/Footer'
import Hero from 'components/Pages/Companies/Hero'
import Navbar from 'components/Navbar'
import Seo from 'components/SEO'
import Talent from 'components/Pages/Companies/TalentDevelopment'
import NextDeveloper from 'components/Pages/Companies/NextDeveloper'
import ChooseAKoder from 'components/Pages/Companies/ChooseAKoder'
import CollaborateWithKodemia from 'components/Pages/Companies/CollaborateWithKodemia'
// Data
import AlliesData from 'config/allies-data.json'
import AllTalentData from 'config/companies/find-all-talent.json'
import TalentData from 'config/companies/talent-data.json'
import ChooseKoder from 'config/companies/choose-koder-data.json'

export default function Empresas() {
  return (
    <>
      <Seo />
      <Navbar />
      <Hero />
      <Talent infoCards={TalentData.cards} />
      <FindAllTalent detail={AllTalentData.detail} infoCards={AllTalentData.cards} />
      <CollaborateWithKodemia />
      <ChooseAKoder chooseKoder={ChooseKoder} />
      <AlliancesKodemia allies={AlliesData} isBlack />
      <NextDeveloper />
      <Footer />
    </>
  )
}
