import React from 'react'
import { useForm } from 'react-hook-form'
import Router from 'next/router'

import login from 'lib/api/login'
import Auth from 'lib/auth'
import * as tracker from 'lib/tracker'
import { AxiosError } from 'axios'

export interface Data {
  email: string
  password: string
}

export default function LoginForm () {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = async ({ email, password }: Data) => {
    try {
      const token = await login.submit(email, password)
      Auth.setToken(token)
      tracker.onLoginComplete(email)
      Router.push('clases')
    } catch (error) {
      login.errorHandler(error as AxiosError)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='login-form'
    >
      <label className='label label-login'>
        Usuario
      </label>
      <input
        className='input input-login'
        type='email'
        name='email'
        placeholder='usuario@ejemplo.com'
        ref={register({ required: true })}
      />
      {errors.email &&
        <span className='error help is-danger is-medium'>
          Este campo es necesario
        </span>}
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
      {errors.password &&
        <span className='error help is-danger is-medium'>
          Este campo es necesario
        </span>}
      <button className='btn button-primary btn-login'>
        Ingresar
      </button>
    </form>
  )
}
