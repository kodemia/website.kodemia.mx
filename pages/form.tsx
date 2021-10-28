
import * as zod from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Button from 'components/Button'
import Input from 'components/Inputs/Input'
import PhoneInput from 'components/Inputs/PhoneInput'
import Select from 'components/Inputs/Select'
import schema from 'schemas/applyForm.schema'
import { ToastContainer } from 'react-toastify'

type ApplyFormData = zod.infer<typeof schema>

export default function Form () {
  const router = useRouter()
  const { register, handleSubmit, control, errors } = useForm<ApplyFormData>({
    resolver: zodResolver(schema)
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const onSubmit = (data: ApplyFormData) => {
    console.log(data)
    setIsSubmitting(true)
    router.push({
      pathname: '/typeform',
      query: {
        email: data.email || '',
        name: data.firstName || ''
      }
    })
  }

  return (
    <form
      className='bg-gray-500'
      onSubmit={handleSubmit(onSubmit)}
    >
      <ToastContainer position='top-center' />
      <div className=' m-4 '>
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

      <div className=' m-4 '>
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

      <div className=' m-4 '>
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

      <div className=' m-4'>
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

      <div className=' m-4'>
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

      <div className=' m-4 '>
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

      <div className=' m-4'>
        Al enviar este formulario estas aceptando nuestros <Link href='https://cdn.kodemia.mx/docs/legal/politica-de-privacidad-kodemia.pdf'> Términos y condiciones </Link>
      </div>

      <div className='column is-full-desktop is-full-touch'>
        <Button
          isPrimary
          label={isSubmitting ? 'Enviando' : 'Enviar'}
          type='submit'
          isDisabled={isSubmitting}
        />
      </div>
    </form>
  )
}
