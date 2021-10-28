
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Widget } from '@typeform/embed-react'

import Seo from 'components/SEO'

export default function BackbaseApply () {
  const router = useRouter()
  const [ isFormSubmitted, setIsFormSubmitted ] = useState(false)

  const hiddenParams = {
    name: router.query?.name as string,
    email: router.query?.email as string,
    course: router.query?.course as string
  }

  useEffect(() => {
    if (!isFormSubmitted) return

    const query = new URLSearchParams(hiddenParams)

    router.push({
      pathname: '/aplicar/backbase/prueba-tecnica',
      query: query.toString()
    })
  }, [isFormSubmitted])

  return (
    <>
      <Seo
        title='Kodemia | Backbase | Aplica'
      />
      {isFormSubmitted &&
         <p> To tech challenge </p>
      }
      {!isFormSubmitted &&
        <Widget
            id='HwpqfUjL'
            className='min-h-screen h-screen'
            hidden={hiddenParams}
            onSubmit={() => setIsFormSubmitted(true)}
        />
      }
    </>
  )
}
