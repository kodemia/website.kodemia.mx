
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Widget } from '@typeform/embed-react'

export default function MyComponent () {
  const { query } = useRouter()
  const [email, setEmail] = useState(query.email)

  return <Widget
    id='ZLwFH3KA' style={{ width: '100%', height: '100vh' }} className='my-form'
    hidden={{
      email: email
    }}
    onReady={() => {
      console.log('form ready')
    }}
	       />
}
