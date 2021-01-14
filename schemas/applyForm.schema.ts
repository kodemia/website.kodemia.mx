
import parsePhoneNumber from 'libphonenumber-js'
import * as z from 'zod'

export default z.object({
  name: z.string().min(2, { message: 'Ingresa tu nombre' }),
  lastName: z.string().min(2, { message: 'Ingresa tu apellido' }),
  email: z.string().email({ message: 'Email invalido' }),
  phone: z
    .string()
    .refine(value => {
      console.log('value: ', value)
      value = `+${value}`
      const phoneNumber = parsePhoneNumber(value)
      return phoneNumber?.isValid()
    }, { message: 'Teléfono invalido' }),
  program: z.enum([
    'javascript-live',
    'javascript-lifetime',
    'python-live',
    'python-lifetime'
  ]),
  referer: z.enum([
    'Facebook',
    'Instagram',
    'Youtube',
    'Twitter',
    'Otro'
  ]).optional(),
  reason: z.string().optional()
})
