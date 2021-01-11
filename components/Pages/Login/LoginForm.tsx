
import React from 'react'
import { useForm } from 'react-hook-form'

export interface Props {
  callback: (email: string, password: string) => void
}
export interface Data{
  email: string
  password: string
}

export default function LoginForm ({ callback }:Props) {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = ({ email, password }: Data) => { callback(email, password) }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='login-form'
    >
      <label className='label label-login'>
        Usuario:
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
          Necesitas llenar este campo
        </span>}
      <label className='label label-login'>
        Contraseña:
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
          Necesitas llenar este campo
        </span>}
      <button className='btn button-primary btn-login'>
        Ingresar
      </button>
    </form>
  )
}
