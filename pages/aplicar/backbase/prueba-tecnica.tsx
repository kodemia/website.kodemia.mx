
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Widget } from '@typeform/embed-react'

import Seo from 'components/SEO'

export default function BackbaseApply () {
  const router = useRouter()
  const [ isFormSubmitted, setIsFormSubmitted ] = useState(false)

  const hiddenParams = {
    name: router.query?.name as string,
    email: router.query?.email as string
  }

  useEffect(() => {
    if (!isFormSubmitted) return

    const query = new URLSearchParams(hiddenParams)

    router.push({
      pathname: '/aplicar/gracias/backbase',
      query: query.toString()
    })
  }, [isFormSubmitted])

  return (
    <>
      <Seo
        title='Kodemia | Backbase | Prueba técnica'
      />
      <Widget
          id='dAy6dnqL'
          className='min-h-screen h-screen'
          hidden={hiddenParams}
          onSubmit={() => setIsFormSubmitted(true)}
      />
    </>
  )
}
