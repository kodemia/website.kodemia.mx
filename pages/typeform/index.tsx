
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Widget, PopupButton, Sidetab } from '@typeform/embed-react'

export default function Typeform() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    setEmail(router.query.email as string)
    setName(router.query.name as string)
    console.log(router.query)
  }, [])

  return (
    <>
      {/* Forma 1 */}
      <Widget
        id='TmpC9ak2' style={{ width: '100%', height: '50vh' }} className='my-form'
        hidden={{
          email,
          name
        }}
        onReady={() => {
          console.log('form ready')
        }}
        onSubmit={() => {
          router.push('aplicar/gracias/javascript-live')
        }}
      />
      {/* Forma 2 */}
      <PopupButton
        id='TmpC9ak2' style={{ fontSize: 20, background: 'cyan', padding: '5px' }} className='my-button' hidden={{
          email,
          name
        }}
      >
        click to open form in popup
      </PopupButton>
      {/* forma 3 */}
      <Sidetab
        id='TmpC9ak2' buttonText='click to open' hidden={{
          email,
          name
        }}
      />
    </>
  )
}
