
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Widget } from '@typeform/embed-react'
import { removeNullishEntries, getValueFromQuery } from 'lib/utils'

import Seo from 'components/SEO'

export default function BackbaseApply () {
  const router = useRouter()
  const [ isFormSubmitted, setIsFormSubmitted ] = useState(false)

  const hiddenParams = {
    name: getValueFromQuery(router, 'name'),
    email: getValueFromQuery(router, 'email')
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
      <Seo title='Kodemia | Backbase | Prueba técnica' />
      <Widget
          id='dAy6dnqL'
          className='min-h-screen h-screen'
          hidden={removeNullishEntries(hiddenParams)}
          onSubmit={() => setIsFormSubmitted(true)}
      />
    </>
  )
}
