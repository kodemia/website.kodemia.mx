import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import { useAuth } from 'lib/hooks'
// My components
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import Klass from 'components/Pages/Classes/Klass'

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

export default function Clase () {
  const [classes, setClasses] = useState<Array<Class>>([])
  const [vimeoId, setVimeoId] = useState<any>()
  const [isVimeo, setIsVimeo] = useState<any>()
  const router = useRouter()

  useAuth()

  useEffect(() => {
    const classVideoId = router.query.id
    const isVimeoB = router.query.isVimeo

    setVimeoId(classVideoId)
    setIsVimeo(isVimeoB)

    classesService.getAll()
      .then(setClasses)
      .catch(error => {
        console.log('get classes catch ', error)
      })
  }, [router.query.id])

  return (
    <div className='clase is-flex is-flex-direction-column is-align-items-center'>
      <Navbar />
      <ToastContainer position='top-center' />
      <div className='clase-container'>
        <Klass idVimeo={vimeoId} isVimeo={isVimeo} classes={classes} />
      </div>
      <Footer />
    </div>
  )
}
