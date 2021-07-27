import parsePhoneNumber from "libphonenumber-js";
import * as z from "zod";

export default z.object({
  firstName: z.string().min(2, { message: "Ingresa tu nombre" }),
  lastName: z.string().min(2, { message: "Ingresa tu apellido" }),
  email: z.string().email({ message: "Email invalido" }),
  phone: z.string().refine(
    (value) => {
      value = `+${value}`;
      const phoneNumber = parsePhoneNumber(value);
      return phoneNumber?.isValid();
    },
    { message: "Teléfono invalido" }
  ),
  knowledge: z.enum([
    "Sí, soy/trabajo como programador",
    "Sí, lo que vi en la universidad",
    "tomé algún curso",
    "no, vengo de cero",
  ]),
  reasonToProgramming: z
    .enum([
      "Quiero actualizarme",
      "Para complementar mi educación",
      "Para aplicarlo a mi emprendimiento",
      "Complementar/cambiar mi carrera profesional",
    ])
    .optional(),
  //course: z.enum(["javascript-live"]),
  customFields: z
    .object({
      knowledge: z.string().optional(),
      reasonToProgramming: z.string().optional(),
    })
    .optional(),
});
