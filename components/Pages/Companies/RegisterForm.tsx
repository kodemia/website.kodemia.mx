
import * as zod from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import Button from 'components/Button'
import Input from 'components/Inputs/Input'
import PhoneInput from 'components/Inputs/PhoneInput'
import schema from 'schemas/registerCompanyForm.schema'
import { ToastContainer } from 'react-toastify'

import * as companyService from 'lib/api/company'

type RegisterCompanyFormData = zod.infer<typeof schema>

export default function RegisterCompanyForm() {
  const { register, handleSubmit, control, errors } = useForm<RegisterCompanyFormData>({
    resolver: zodResolver(schema)
  })

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const router = useRouter()

  const onSubmit = (data: RegisterCompanyFormData) => {
    setIsSubmitting(true)

    data.customFields = {
      position: data.position,
      company: data.company
    }

    companyService.register(data)
      .then(() => router.push('/empresas/registro/gracias'))
      .catch(error => {
        companyService.errorHandler(error)
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
            label='Empresa'
            type='text'
            placeholder='Tu empresa'
            name='company'
            required
            register={register}
            error={errors?.customFields?.company?.message}
          />
        </div>
        <div className='w-full my-3 inline-block'>
          <Input
            label='Cargo / Puesto'
            type='text'
            placeholder='Tu puesto'
            name='position'
            required
            register={register}
            error={errors?.customFields?.position?.message}
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
      <div className='w-full my-6'>
        Al enviar este formulario estas aceptando nuestros <Link href='https://cdn.kodemia.mx/docs/legal/politica-de-privacidad-kodemia.pdf'> Términos y condiciónes </Link>
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
