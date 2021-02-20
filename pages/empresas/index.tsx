// My components
import AlliancesKodemia from 'components/Pages/Home/AlliancesKodemia'
import ChooseAKoder from 'components/Pages/Companies/ChooseAKoder'
import CollaborateWithKodemia from 'components/Pages/Companies/CollaborateWithKodemia'
import HelpFindTalent from 'components/Pages/Companies/HelpFindTalent'
import FindIdealKoder from 'components/Pages/Companies/FindIdealKoder'
import Footer from 'components/Footer'
import Hero from 'components/Pages/Companies/Hero'
import Navbar from 'components/Navbar'
import NextDeveloper from 'components/Pages/Companies/NextDeveloper'
import Seo from 'components/SEO'
import TalentDevelopment from 'components/Pages/Companies/TalentDevelopment'

// Data
import AlliesData from 'config/allies-data.json'
import FindTalentData from 'config/companies/help-find-talent.json'
import IdealKoder from 'config/companies/ideal-koder.json'
import TalentData from 'config/companies/talent-data.json'
import ChooseKoder from 'config/companies/choose-koder-data.json'

export default function Empresas () {
  return (
    <>
      <Seo
        title='Kodemia | Encuentra desarrolladores de alto calibre'
        description='Nuestros egresados viven una experiencia de alto desempeño que los forma de manera profesional y personal para convertirse en líderes tecnológicos'
      />
      <Navbar />
      <Hero />
      <TalentDevelopment infoCards={TalentData.cards} />
      <FindIdealKoder image={IdealKoder.image} infoCards={IdealKoder.cards} />
      <HelpFindTalent detail={FindTalentData.detail} infoCards={FindTalentData.cards} />
      <CollaborateWithKodemia />
      <ChooseAKoder chooseKoder={ChooseKoder} />
      <AlliancesKodemia allies={AlliesData} isBlack />
      <NextDeveloper />
      <Footer />
    </>
  )
}
