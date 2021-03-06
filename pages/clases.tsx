
import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import { ToastContainer } from 'react-toastify'

// My components
import Navbar from 'components/Navbar'
import H2 from 'components/H2'
import H3 from 'components/H3'
import ClassCard from 'components/Pages/Classes/ClassCard'
import Footer from 'components/Footer'
import Seo from 'components/SEO'
// api
import { getClasses } from '../lib/api'
// utils
import { checkToken } from '../utils/utils'

export interface Class {
  date: string
  description: string
  generation: object
  thumbnail: string
  title: string
  vimeoId: string
  _id: string
}

export default function Classes () {
  const [classes, setClasses] = useState<Array<Class>>([])
  useEffect(() => {
    const token = window.sessionStorage.getItem('token')
    if (!token) {
      window.sessionStorage.setItem('from', 'clases')
      Router.replace('/login')
    }

    getClasses(token)
      .then(classes => {
        setClasses(classes)
      })
      .catch(error => {
        const status = error.request.status
        checkToken(status)
      })
  }, [])

  return (
    <div className='classes'>
      <Seo />
      <Navbar />
      <ToastContainer position='top-center' />
      <div className='columns is-multiline classes-container'>
        <div className='column is-full classes-bg'>
          <div className='title-container is-flex is-justify-content-center'>
            <div className='wrapper is-flex is-flex-direction-column is-justify-content-center'>
              <H3 text='Clases Kodemia' />
              <div className='h2'>
                <H2
                  whiteText='No te pierdas'
                  cyanText='ninguna'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='column is-flex is-justify-content-center classes-wrapper'>

          <div className='columns is-multiline  classes-cards'>
            {
              classes.length === 0 &&
                <div className='column'>
                  <progress className='progress is-small is-info' max='100'>15%</progress>
                </div>
            }
            {
              classes.map((klass, index) => (
                <div
                  key={`class-${index}`}
                  className='column is-4-desktop is-6-tablet is-flex is-justify-content-center'
                >
                  <ClassCard klass={klass} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
