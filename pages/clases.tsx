
import React, { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import ClassCard, { ClassCardLoading } from 'components/Pages/Classes/ClassCard'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import PageSection from 'components/PageSection'
import PageHero from 'components/PageHero'
import Seo from 'components/SEO'

import { useAuth } from 'lib/hooks'
import classesService from 'lib/api/classes'
import _ from 'lodash'

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
    <>
      <Seo
        title='Kodemia | clases'
        description='¿Quieres estudiar? Aquí puedes volver a ver tus clases pasadas'
      />
      <Navbar />
      <ToastContainer position='top-center' />

      <PageHero
        subTitle='Clases kodemia'
        title='No te pierdas ninguna'
        hasSeparatedLines
        headerClassName={'bg-clases-hero-sm md:bg-clases-hero-md lg:bg-clases-hero-lg'}
      />

      <PageSection
        sectionClassName='min-h-[50vh]'
        contentClassName={'flex flex-row flex-wrap justify-between'}
      >
        {/* Loading animation */}
        {_.isEmpty(classes) && _.range(6).map((_, index) => (
            <ClassCardLoading
              key={`klass-placeholder-${index}`}
              className='mb-8 grow md:grow-0 basis-full md:basis-[48%] lg:basis-[32%]'
            />
        ))}

        {/* Class list */}
        {!_.isEmpty(classes) && classes.map((klass, index) => (
          <ClassCard
            key={`class-card-${index}`}
            className='mb-8 grow md:grow-0 basis-full md:basis-[48%] lg:basis-[32%]'
            klass={klass}
          />
        ))}
      </PageSection>

      <Footer />
    </>
  )
}
