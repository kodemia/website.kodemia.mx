
import React, { useState } from 'react'
// my components
import FormField from '../../FormField'

export default function LoginForm () {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handlerInputChange = (name, value) => {
    name === 'user'
      ? setUser(value)
      : setPassword(value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    // callback(title, subtitle, author, hour, content, popular, img)

    // setTitle('')
    // setSubtitle('')
    // setAuthor('')
    // setContent('')
    // setImg('')
    // setPopular(false)
  }
  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <FormField
        text='Usuario:'
        value={user}
        name='user'
        callback={handlerInputChange}
      />
      <FormField
        text='Contraseña:'
        type='password'
        value={password}
        name='password'
        callback={handlerInputChange}
      />
    </form>
  )
}
