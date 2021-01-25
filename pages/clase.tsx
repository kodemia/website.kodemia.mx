import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Router from 'next/router'

// My components
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'

const Klass = dynamic({
  modules: () => {
    return {
      KlassComp: import('../components/Pages/Classes/Klass')
    }
  },
  ssr: false,
  render: renderKlassNoSrr
})

function renderKlassNoSrr (props, { KlassComp }) {
  return <KlassComp />
}

export default function Clase () {
  useEffect(() => {
    const token = window.sessionStorage.getItem('token')
    if (!token) {
      sessionStorage.setItem('from', 'clases')
      Router.replace('/login')
    }
  }, [])
  return (
    <div className='clase is-flex is-flex-direction-column is-align-items-center'>
      <Navbar />
      <div className='clase-container'>
        <Klass />
      </div>
      <Footer />
    </div>
  )
}
