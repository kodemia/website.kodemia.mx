
// My components
import AlliancesKodemia from 'components/Pages/Home/AlliancesKodemia'
import Footer from 'components/Footer'
import Hero from 'components/Pages/Home/Hero'
import KodemiaExperience from 'components/Pages/Home/KodemiaExperience'
import KodemiaFinancing from 'components/Pages/Home/KodemiaFinancing'
import Navbar from 'components/Navbar'
import BannerBecaBackbase from 'components/banners/BecaBackbase'
import OurBootcamps from 'components/Pages/Home/OurBootcamps'
import OurMethod from 'components/Pages/Home/OurMethod'
import Seo from 'components/SEO'
import Testimonials from 'components/Pages/Home/Testimonials'
import TransformYourLife from 'components/Pages/Home/TransformYourLife'
import WhatGoingAchieve from 'components/Pages/Home/WhatGoingAchieve'
import WhyKodemia from 'components/Pages/Home/WhyKodemia'
// Data
import AlliesData from 'config/allies-data.json'
import ExperienceData from 'config/experiencie-data.json'
import KodemiaFinancingData from 'config/kodemia-financing-data.json'
import OurBootcampsCards from 'config/our-bootcamps-cards.json'
import OurMethodData from 'config/our-method-data.json'
import TestimonialData from 'config/testimonials-data.json'
import WhyKodemiaCards from 'config/why-kodemia-cards.json'
import WinnerImages from 'config/winner-images.json'

export default function Home () {
  return (
    <>
      <Seo />
      <Navbar />
      <BannerBecaBackbase />
      <Hero
        video='https://prismic-io.s3.amazonaws.com/kodemia/d58417e7-a700-4c67-a3e2-5a746d3df0b2_home-background.mp4'
      />
      <WhyKodemia
        cards={WhyKodemiaCards.cards}
        cyanTitle={WhyKodemiaCards.cyanTitle}
        image={WhyKodemiaCards.image}
        subtitle={WhyKodemiaCards.subtitle}
        whiteTitle={WhyKodemiaCards.whiteTitle}
      />
      <OurBootcamps bootcamps={OurBootcampsCards} />
      <KodemiaExperience videos={ExperienceData} />
      <WhatGoingAchieve winnerImages={WinnerImages} />
      <OurMethod ourMethod={OurMethodData} />
      <KodemiaFinancing info={KodemiaFinancingData} />
      <AlliancesKodemia
        allies={AlliesData.allies}
        cyanTitle={AlliesData.cyanTitle}
        subtitle={AlliesData.subtitle}
        whiteTitle={AlliesData.whiteTitle}
      />
      <Testimonials testimonials={TestimonialData} />
      <TransformYourLife />
      <Footer />
    </>
  )
}
