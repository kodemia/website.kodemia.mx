import React, { useState } from 'react'
import Router from 'next/router'
import { useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify'
import { AxiosError } from 'axios'
import classNames from 'classnames'

import login from 'lib/api/login'
import Auth from 'lib/auth'

import Button from 'components/Button'

export interface Data {
  email: string
  password: string
}

export default function LoginForm() {
  const { register, handleSubmit, errors } = useForm()

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const onSubmit = async ({ email, password }: Data) => {
    try {
      setIsSubmitting(true)
      const token = await login.submit(email, password)
      Auth.login(token, email)
      Router.push('/clases')
    } catch (error) {
      setIsSubmitting(false)
      login.errorHandler(error as AxiosError)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col w-full'
    >
      <ToastContainer position='top-center' />
      <label className='mt-9 mb-5'>
        Usuario
      </label>
      <div className='flex flex-col relative'>
        <input
          className={classNames(
            'bg-black/70 text-brand-complementary',
            'rounded-small py-1 px-3',
            'focus:outline focus:outline-1 focus:outline-brand-primary',
            'placeholder:font-light placeholder:text-brand-gray',
          )}
          name='email'
          placeholder='usuario@ejemplo.com'
          ref={register({ required: true })}
        />
        {errors.email &&
          <span className={classNames(
            'text-brand-error font-light',
            'text-xs text-left',
            'absolute -bottom-5'
          )}>
            Este campo es necesario
          </span>
        }
      </div>
      <label className='mt-9 mb-5'>
        Contraseña
      </label>
      <div className='flex flex-col relative'>
        <input
          className={classNames(
            'bg-black/70 text-brand-complementary',
            'rounded-small py-1 px-3',
            'focus:border focus:border-solid focus:border-brand-primary',
            'placeholder:font-light placeholder:text-brand-gray',
          )}
          type='password'
          name='password'
          placeholder='contraseña'
          ref={register({ required: true })}
        />
        {errors.password &&
          <span className={classNames(
            'text-brand-error font-light',
            'text-xs text-left',
            'absolute -bottom-5'
          )}>
            Este campo es necesario
          </span>
        }
      </div>
      <div className='mt-14'>
        <Button
          isPrimary
          label={isSubmitting ? 'Enviando' : 'Ingresar'}
          type='submit'
          isDisabled={isSubmitting}
        />
      </div>
    </form>
  )
}
