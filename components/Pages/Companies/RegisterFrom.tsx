
import * as zod from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// My components
import Button from 'components/Button'
import Input from 'components/Inputs/Input'
import PhoneInput from 'components/Inputs/PhoneInput'
import schema from 'schemas/registerCompanyForm.schema'
import { ToastContainer, toast } from 'react-toastify'

import { registerCompany } from 'lib/api'

type RegisterCompanyFormData = zod.infer<typeof schema>

export default function RegisterCompanyForm () {
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

    data.position=''
    data.company=''

    registerCompany(data)
      .then((result) => {
        console.log(result)
        router.push('empresas/gracias')
      })
      .catch(error => {
        console.log('error', error)
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
          label='Empresa'
          type='text'
          placeholder='Tu empresa'
          name='company'
          required
          register={register}
          error={errors?.customFields?.company?.message}
        />
      </div>
      <div className='column is-half-desktop is-full-touch'>
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
        Al enviar este formulario estas aceptando nuestros <Link href='https://cdn.kodemia.mx/docs/legal/politica-de-privacidad-kodemia.pdf'> Términos y condiciónes </Link>
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
