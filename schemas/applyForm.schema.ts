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
    "Si, soy/trabajo como programador",
    "Si, lo que vi en la universidad",
    "Tomé algún curso",
    "No, vengo en cero",
  ]),
  reasonToProgramming: z
    .enum([
      "Me quiero actualizar",
      "Quiero complementar mi educación",
      "Quiero aplicarlo en mi emprendimiento",
      "Quiero cambiar mi carrera profesional",
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
