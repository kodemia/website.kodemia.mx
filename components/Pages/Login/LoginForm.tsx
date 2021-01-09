
import React, { useState, SyntheticEvent } from 'react'
// my components
import FormField from '../../FormField'

export interface Props {
  callback: (email: string, password: string) => void
}

export default function LoginForm ({ callback }:Props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handlerInputChange = (name: string, value: string) => {
    name === 'email'
      ? setEmail(value)
      : setPassword(value)
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    callback(email, password)
  }
  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <FormField
        text='Usuario:'
        value={email}
        name='email'
        callback={handlerInputChange}
      />
      <FormField
        text='Contraseña:'
        type='password'
        value={password}
        name='password'
        callback={handlerInputChange}
      />
      <button className='btn button-primary btn-login'>
        Igresar
      </button>
    </form>
  )
}
