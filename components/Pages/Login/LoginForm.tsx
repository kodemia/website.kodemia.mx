import React, { useState } from 'react'
import Router from 'next/router'
import { useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify'
import { AxiosError } from 'axios'

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
			className='login-form'
		>
			<ToastContainer position='top-center' />
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
				<span className='error help is-danger is-medium '>
					Este campo es necesario
				</span>}
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
