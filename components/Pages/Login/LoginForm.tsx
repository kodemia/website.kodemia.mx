import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Router from 'next/router'
// API
import { login } from '../../../lib/api'

export interface Data {
  email: string
  password: string
}

export default function LoginForm() {
  const [error, setError] = useState(false)
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = async ({ email, password }: Data) => {
    try {
      const token = await login(email, password)
      window.sessionStorage.setItem('token', token)
      Router.push('clases')
    } catch (error) {
      const status = error.request.status
      if (status === 412) {
        Router.replace('/fin-periodo-de-prueba')
      }
      setError(true)
      setTimeout(() => setError(false), 5000)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='login-form'
    >
      <label className='label label-login'>Usuario</label>
      <input
        className='input input-login'
        type='email'
        name='email'
        placeholder='usuario@ejemplo.com'
        ref={register({ required: true })}
      />
      {errors.email &&
        (
          <span className='error help is-danger is-medium'>
            Necesitas llenar este campo
          </span>
        )}
      <label className='label label-login'>
        Contraseña
      </label>
      <input
        className='input input-login'
        type='password'
        name='password'
        placeholder='contraseña'
        ref={register({ required: true })}
      />
      {errors.password && (
        <span className='error help is-danger is-medium'>
          Necesitas llenar este campo
        </span>
      )}
      <button className='btn button-primary btn-login'>
        Ingresar
      </button>
      {error &&
        <p className='help is-danger is-medium'>
          Contraseña o usuario incorrectos
        </p>
      }
    </form>
  )
}
