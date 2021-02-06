
import React from 'react'
// My components
import AlliancesKodemia from 'components/Pages/Home/AlliancesKodemia'
import FindKoder from 'components/Pages/Companies/FindKoder'
import Footer from 'components/Footer'
import Hero from 'components/Pages/Companies/Hero'
import Navbar from 'components/Navbar'
import Seo from 'components/SEO'
// Data
import AlliesData from 'config/allies-data.json'

export default function Empresas () {
  return (
    <>
      <Seo />
      <Navbar />
      <Hero />
      <FindKoder />
      <AlliancesKodemia allies={AlliesData} isBlack />
      <Footer />
    </>
  )
}
