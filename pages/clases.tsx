
import React, { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import ClassCard from 'components/Pages/Classes/ClassCard'
import Footer from 'components/Footer'
import H3 from 'components/H3'
import H5 from 'components/H5'
import Navbar from 'components/Navbar'
import Seo from 'components/SEO'

import { useAuth } from 'lib/hooks'
import classesService from 'lib/api/classes'

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
  useAuth()
  useEffect(() => {
    classesService.getAll()
      .then(setClasses)
      .catch(classesService.errorHandler)
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
              <H5>
                Clases Kodemia
              </H5>
              <div className='h2'>
                <H3
                  whiteText='No te pierdas'
                  cyanText='ninguna'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='column is-flex is-justify-content-center classes-wrapper'>
          <div className='columns is-multiline  classes-cards'>
            {classes.length === 0 &&
              <div className='column'>
                <progress className='progress is-small is-info' max='100'>
                  15%
                </progress>
              </div>}
            {classes.map((klass, index) =>
              <div
                key={`class-${index}`}
                className='column is-4-desktop is-6-tablet is-flex is-justify-content-center'
              >
                <ClassCard klass={klass} />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
