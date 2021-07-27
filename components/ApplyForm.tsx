
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
import { ToastContainer, toast } from 'react-toastify'

import { apply } from 'lib/api'
import { useRouter } from 'next/router'

type ApplyFormData = zod.infer<typeof schema>

export default function ApplyForm () {
  const { register, handleSubmit, control, errors } = useForm<ApplyFormData>({
    resolver: zodResolver(schema)
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const router = useRouter()

  const onSubmit = (data: ApplyFormData) => {
    data.customFields = {
      knowledge: data.knowledge,
      reasonToProgramming: data.reasonToProgramming
    }
    apply(data)
      .then(() => {
        router.push('aplicar/gracias/javascript-live')
      })
      .catch(error => {
        const status = error.response.status
        let errorMessage = `☠️ Ocurrio un error en el servidor,
        por favor intenta mas tarde o reportalo a contacto@kodemia.mx`

        if (status >= 400 && status < 500) {
          errorMessage = '🤔 Por favor, revisa que tu información sea correcta y vuelve a intentar enviar el formulario'
          toast.warn(errorMessage)
          return
        }
        toast.error(errorMessage)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <form
      className='columns is-mobile is-multiline'
      onSubmit={handleSubmit(onSubmit)}
    >
      <ToastContainer position='top-center' />
      <div className='column is-half-desktop is-full-touch'>
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

      <div className='column is-half-desktop is-full-touch'>
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

      <div className='column is-half-desktop is-full-touch'>
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

      <div className='column is-half-desktop is-full-touch'>
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

      <div className='column is-full-desktop is-full-touch'>
        <Select
          label='¿Tienes conocimientos previos en programación?'
          register={register}
          name='knowledge'
          error={errors?.knowledge?.message}
          options={[
            { value: 'Sí, soy/trabajo como programador' },
            { value: 'Sí, lo que vi en la universidad' },
            { value: 'tomé algún curso' },
            { value: 'no, vengo de cero' }
          ]}
          required
        />
      </div>

      <div className='column is-full-desktop is-full-touch'>
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

      <div className='column is-full-desktop is-full-touch'>
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
