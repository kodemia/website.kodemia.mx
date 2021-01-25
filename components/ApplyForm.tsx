
import * as zod from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import Link from 'next/link'

import Button from 'components/Button'
import Input from 'components/Inputs/Input'
import PhoneInput from 'components/Inputs/PhoneInput'
import Select from 'components/Inputs/Select'
import TextArea from 'components/Inputs/TextArea'
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
    setIsSubmitting(true)

    apply(data)
      .then(() => {
        router.push(`aplicar/gracias/${data.course}`)
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

      <div className='column is-full-desktop is-full-touch'>
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

      <div className='column is-full-desktop is-full-touch'>
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
          label='¿Qué programa te interesa?'
          register={register}
          name='course'
          error={errors?.course?.message}
          options={[
            { label: 'Javascript Live', value: 'javascript-live' },
            { label: 'Python Live', value: 'python-live' }
          ]}
          required
        />
      </div>

      <div className='column is-full-desktop is-full-touch'>
        <Select
          label='¿Dónde nos conociste?'
          register={register}
          name='referer'
          error={errors?.referer?.message}
          options={[
            { value: 'Facebook' },
            { value: 'Twitter' },
            { value: 'Instagram' },
            { value: 'YouTube' },
            { value: 'Otro' }
          ]}
          required
        />
      </div>

      <div className='column is-full-desktop is-full-touch'>
        <TextArea
          label='¿Por qué quieres aplicar a Kodemia?'
          register={register}
          name='reason'
          rows={2}
          error={errors?.reason?.message}
        />
      </div>

      <div className='column is-full-desktop is-full-touch'>
        Al enviar este formulario estas aceptando nuestros <Link href='/terminos-y-condiciones'> Términos y condiciónes </Link>
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
