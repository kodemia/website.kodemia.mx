
import React from 'react'
// My components
import Seo from 'components/SEO'
import Navbar from 'components/Navbar'
import Hero from 'components/Pages/Companies/Hero'
import CollaborateWithKodemia from 'components/Pages/Companies/CollaborateWithKodemia'
import AlliancesKodemia from 'components/Pages/Home/AlliancesKodemia'
import Footer from 'components/Footer'
// Data
import AlliesData from 'config/allies-data.json'

export default function Empresas () {
  return (
    <>
      <Seo />
      <Navbar />
      <Hero />
      <CollaborateWithKodemia />
      <AlliancesKodemia allies={AlliesData} isBlack />
      <Footer />
    </>
  )
}
