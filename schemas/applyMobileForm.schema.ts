
import parsePhoneNumber from "libphonenumber-js"
import * as z from "zod"
import validator from 'validator'

export default z.object({
  firstName: z
	  .string()
		.min(2, { message: "Ingresa tu nombre" })
		.refine(value => validator.isAlpha(value, 'es-ES',{ignore:' '}),
		{ message: 'Debe ser texto valido' }),
  lastName: z
	  .string()
		.min(2, { message: "Ingresa tu apellido" })
		.refine(value => validator.isAlpha(value, 'es-ES',{ignore:' '}),
		{ message: 'Debe ser texto valido' }),
  email: z.string().email({ message: "Email invalido" }),
  phone: z.string().refine(
    (value) => {
      value = `+${value}`;
      const phoneNumber = parsePhoneNumber(value);
      return phoneNumber?.isValid();
    },
    { message: "Teléfono invalido" }
  ),
  course: z.enum(["iOS", "Android"]),
  reasonToApplyForScholarship: z.string(),
  customFields: z
    .object({
      reasonToProgramming: z.string().optional(),
      campaignName: z.string().optional(),
      reasonToApplyForScholarship: z.string().optional()
    })
    .optional(),
});
