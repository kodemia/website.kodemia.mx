
import * as zod from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import Button from 'components/Button'
import Input from 'components/Inputs/Input'
import PhoneInput from 'components/Inputs/PhoneInput'
import Select from 'components/Inputs/Select'
import schema from 'schemas/applyForm.schema'
import { ToastContainer } from 'react-toastify'

import apply from 'lib/api/apply'
import { useRouter } from 'next/router'

type ApplyFormData = zod.infer<typeof schema>

export default function ApplyForm() {
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
      className={classNames(
        'bg-brand-black-light w-full',
        'px-4  md:px-10', 'py-6 md:py-8',
        'rounded-medium'
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <ToastContainer position='top-center' />

      <div className='w-full lg:grid lg:grid-cols-2 lg:grid-row-1 lg:gap-4'>
        <div className='w-full my-3 inline-block'>
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

        <div className='w-full my-3 inline-block'>
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
      </div>

      <div className='w-full lg:grid lg:grid-cols-2 lg:grid-row-1 lg:gap-4'>
        <div className='w-full my-3 inline-block'>
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

        <div className='w-full my-3 inline-block'>
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
      </div>

      <div className='w-full my-3'>
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

      <div className='w-full my-3'>
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

      <div className='w-full my-6'>
        Al enviar este formulario estas aceptando nuestros <Link href='https://cdn.kodemia.mx/docs/legal/politica-de-privacidad-kodemia.pdf'> Términos y condiciones </Link>
      </div>

      <div className='mt-3'>
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
