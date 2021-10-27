
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useForm, Controller } from 'react-hook-form'
import { ToastContainer } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import Button from 'components/Button'
import Input from 'components/Inputs/Input'
import PhoneInput from 'components/Inputs/PhoneInput'
import Select from 'components/Inputs/Select'
import TextArea from 'components/Inputs/TextArea'


import schema from 'schemas/applyMobileForm.schema'

import apply from 'lib/api/apply-mobile'

type ApplyFormData = zod.infer<typeof schema>

export default function ApplyForm () {
  const {
    register,
    handleSubmit,
    control,
    errors,
    formState
  } = useForm<ApplyFormData>({ resolver: zodResolver(schema) })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const onSubmit = (data: ApplyFormData) => {
    data.customFields = {
      campaignName: 'Landing Page Backbase',
      reasonToApplyForScholarship: data.reasonToApplyForScholarship
    }

    apply.submit(data)
      .then(() => router.push('aplicar/gracias/javascript-live'))
      .catch(apply.errorHandler)
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
          label='¿Qué programa te interesa?'
          register={register}
          name='course'
          error={errors?.course?.message}
          options={[
            { value: 'iOS' },
            { value: 'Android' }
          ]}
          required
        />
      </div>

      <div className='pb-3'>
        <TextArea
          label='¿Por qué quieres aplicar?'
          name='reasonToApplyForScholarship'
          register={register}
          error={errors?.reasonToApplyForScholarship?.message}
          required
        />
      </div>

      <div className='pb-3'>
        Al enviar este formulario estas aceptando nuestros <Link href='https://kodemia.mx/politica-de-privacidad'> Términos y condiciones </Link>
      </div>

      <div className='pt-3'>
        <Button
          isPrimary
          label={formState.isSubmitting ? 'Enviando' : 'Aplica a la Beca'}
          type='submit'
          isDisabled={formState.isSubmitting}
        />
      </div>
    </form>
  )
}
