
import * as zod from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import Link from 'next/link'

import Button from 'components/Button'
import Input from 'components/Inputs/Input'
import PhoneInput from 'components/Inputs/PhoneInput'
import Select from 'components/Inputs/Select'
import schema from 'schemas/applyForm.schema'
import { ToastContainer } from 'react-toastify'

import apply from 'lib/api/apply'
import { useRouter } from 'next/router'

type ApplyFormData = zod.infer<typeof schema>

export default function ApplyLandingForm() {
	const { register, handleSubmit, control, errors } = useForm<ApplyFormData>({
		resolver: zodResolver(schema)
	})
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
	const router = useRouter()

	const onSubmit = (data: ApplyFormData) => {
		setIsSubmitting(true)

		data.customFields = {
			knowledge: data.knowledge,
			reasonToProgramming: data.reasonToProgramming,
			campaignName: 'website'
		}

		apply.submit(data)
			.then(() => router.push('aplicar/gracias/javascript-live'))
			.catch(error => {
				apply.errorHandler(error)
				setIsSubmitting(false)
			})
			.finally(() => setIsSubmitting(false))
	}


	return (
		<form
			className='bg-gray-kd-dark border rounded-xl p-5'
			onSubmit={handleSubmit(onSubmit)}
		>
			<ToastContainer position='top-center' />
			<div className='pb-3'>
				<Input
					label='Nombre'
					type='text'
					placeholder='Nombre'
					name='firstName'
					required
					register={register}
					error={errors?.firstName?.message}
				/>
			</div>

			<div className='pb-3'>
				<Input
					label='Apellido'
					type='text'
					placeholder='Apellido'
					name='lastName'
					required
					register={register}
					error={errors?.lastName?.message}
				/>
			</div>

			<div className='pb-3'>
				<Input
					label='Correo electrónico'
					type='email'
					placeholder='name@ejemplo.com'
					name='email'
					required
					register={register}
					error={errors?.email?.message}
				/>
			</div>

			<div className='pb-3'>
				<Controller
					name='phone'
					control={control}
					defaultValue='default'
					render={({ value, onChange }) =>
						<PhoneInput
							label='Teléfono con Whatsapp'
							error={errors?.phone?.message}
							value={value}
							onChange={onChange}
						/>}
				/>
			</div>

			<div className='pb-3'>
				<Select
					label='¿Tienes conocimientos previos en programación?'
					register={register}
					name='knowledge'
					error={errors?.knowledge?.message}
					options={[
						{ value: 'Sí, soy/trabajo como programador' },
						{ value: 'Sí, lo que vi en la universidad' },
						{ label: 'No, vengo de cero', value: 'tomé algún curso' },
						{ label: 'Sí, tomé algún curso', value: 'no, vengo de cero' }
					]}
					required
				/>
			</div>

			<div className='pb-3'>
				<Select
					label='¿Por qué quieres aprender a programar?'
					register={register}
					name='reasonToProgramming'
					error={errors?.reasonToProgramming?.message}
					options={[
						{ value: 'Quiero actualizarme' },
						{ value: 'Para complementar mi educación' },
						{ value: 'Para aplicarlo a mi emprendimiento' },
						{ value: 'Complementar/cambiar mi carrera profesional' }
					]}
					required
				/>
			</div>

			<div className='pb-3'>
				Al enviar este formulario estas aceptando nuestros <Link href='https://kodemia.mx/politica-de-privacidad'> Términos y condiciones </Link>
			</div>

			<div className='pt-3'>
				<Button
					isPrimary
					label={isSubmitting ? 'Enviando...' : 'Enviar'}
					type='submit'
					isDisabled={isSubmitting}
				/>
			</div>
		</form>
	)
}
