
import parsePhoneNumber from "libphonenumber-js";
import * as z from "zod";

export default z.object({
  firstName: z.string().min(2, { message: "Ingresa tu nombre" }).regex(/[a-zA-Z]/, { message: "El nombre debe ser texto" }),
  lastName: z.string().min(2, { message: "Ingresa tu apellido" }).regex(/[a-zA-Z]/, { message: "El apellido debe ser texto" }),
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
