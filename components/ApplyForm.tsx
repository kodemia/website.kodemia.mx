
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import Button from 'components/Button'
import Input from 'components/Inputs/Input'
import PhoneInput from 'components/Inputs/PhoneInput'
import Select from 'components/Inputs/Select'
import schema from 'schemas/applyForm.schema'

// import PhoneInput from 'react-phone-input-2'
// import es from 'react-phone-input-2/lang/es.json'

type ApplyFormData = zod.infer<typeof schema>

export default function ApplyForm () {
  const { register, handleSubmit, control, errors } = useForm<ApplyFormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: ApplyFormData) => {
    console.log('data: ', data)
  }

  return (
    <form
      className='columns is-mobile is-multiline'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='column is-half-desktop is-full-touch'>
        <Input
          label='Nombre'
          type='text'
          placeholder='Nombre'
          name='name'
          register={register}
          error={errors?.name?.message}
        />
      </div>

      <div className='column is-half-desktop is-full-touch'>
        <Input
          label='Apellido'
          type='text'
          placeholder='Apellido'
          name='lastName'
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
          name='program'
          error={errors?.program?.message}
        />
      </div>

      <div className='column is-full-desktop is-full-touch'>
        <Select
          label='¿Dónde nos conociste?'
          register={register}
          name='referer'
          error={errors?.referer?.message}
        />
      </div>

      <div className='column is-full-desktop is-full-touch'>
        <Select
          label='¿Por qué quieres aplicar a Kodemia?'
          register={register}
          name='reason'
          error={errors?.reason?.message}
        />
      </div>

      <div className='column is-full-desktop is-full-touch'>
        Al enviar aceptas nuestros Terminos y conidiciónes
      </div>

      <div className='column is-full-desktop is-full-touch'>
        <Button
          isPrimary
          label='Enviar'
          type='submit'
        />
      </div>
    </form>
  )
}
