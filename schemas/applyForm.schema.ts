
import parsePhoneNumber from 'libphonenumber-js'
import * as z from 'zod'

export default z.object({
  firstName: z.string().min(2, { message: 'Ingresa tu nombre' }),
  lastName: z.string().min(2, { message: 'Ingresa tu apellido' }),
  email: z.string().email({ message: 'Email invalido' }),
  phone: z
    .string()
    .refine(value => {
      value = `+${value}`
      const phoneNumber = parsePhoneNumber(value)
      return phoneNumber?.isValid()
    }, { message: 'Teléfono invalido' }),
  course: z.enum([
    'javascript-live',
    'python-live'
  ]),
  referer: z.enum([
    'Facebook',
    'Instagram',
    'Youtube',
    'Twitter',
    'Otro'
  ]).optional(),
  reason: z.string().optional(),
  customFields: z.object({
    source: z.string().optional(),
    reasonToApply: z.string().optional()
  }).optional()
})
