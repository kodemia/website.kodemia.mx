
import parsePhoneNumber from 'libphonenumber-js'
import * as z from 'zod'

export default z.object({
  firstName: z.string().min(2, { message: 'Ingresa tu nombre' }).regex(/[a-zA-Z]/, { message: "El nombre debe ser texto" }),
  lastName: z.string().min(2, { message: 'Ingresa tu apellido' }).regex(/[a-zA-Z]/, { message: "El apellido debe ser texto" }),
  email: z.string().email({ message: 'Email invalido' }),
  phone: z
    .string()
    .refine(value => {
      value = `+${value}`
      const phoneNumber = parsePhoneNumber(value)
      return phoneNumber?.isValid()
    }, { message: 'Teléfono invalido' }),
  company: z.string().min(2, { message: ' Ingresa el nombre de tu compañía' }),
  position: z.string().min(2, { message: 'Ingresa tu puesto' }),
  customFields: z.object({
    company: z.string().optional(),
    position: z.string().optional()
  }).optional()
})
