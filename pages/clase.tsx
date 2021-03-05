import React, { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'

// My components
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import Klass from 'components/Pages/Classes/Klass'
// api
import { getClasses } from 'lib/api'

export interface Class {
  date: string
  description: string
  generation: object
  thumbnail: string
  title: string
  vimeoId: string
  _id: string
}

export default function Clase() {
  const [classes, setClasses] = useState<Array<Class>>([])
  const [vimeoId, setVimeoId] = useState<any>()
  const [isVimeo, setIsVimeo] = useState<any>()
  const router = useRouter()

  useEffect(() => {
    const classVideoId = router.query.id
    const isVimeoB = router.query.isVimeo
    const token = window.sessionStorage.getItem('token')

    if (!token) {
      window.sessionStorage.setItem('from', 'clases')
      Router.replace('/login')
    }

    setVimeoId(classVideoId)
    setIsVimeo(isVimeoB)

    getClasses(token).then(classes => {
      setClasses(classes)
    })
  }, [router.query.id])

  return (
    <div className='clase is-flex is-flex-direction-column is-align-items-center'>
      <Navbar />
      <div className='clase-container'>
        <Klass idVimeo={vimeoId} isVimeo={isVimeo} classes={classes} />
      </div>
      <Footer />
    </div>
  )
}
