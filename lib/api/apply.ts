
import api from 'lib/api'
import { AxiosError } from 'axios'
import * as zod from 'zod'
import applySchema from 'schemas/applyForm.schema'
import { toast } from 'react-toastify'

type ApplyFormData = zod.infer<typeof applySchema>

const errors = {
  invalidaData: {
    message: '🤔 Por favor, revisa que tu información sea correcta y vuelve a intentar enviar el formulario'
  },
  network: {
    message: 'Error de red, intenta de nuevo'
  },
  unknown: {
    message: 'Ocurrió un error desconocido, por favor intenta mas tarde o contáctanos al correo info@kodemia.mx'
  }
}

export async function submit (data: ApplyFormData) {
  const url = '/active-campaign/apply'
  return api.post(url, data)
}

export function errorHandler (error: AxiosError) {
  const status = error.response?.status ?? 0

  let errorMessage = (status >= 400 && status < 500)
    ? errors.invalidaData.message
    : errors.unknown.message

  if (!status) errorMessage = errors.network.message

  return toast.error(errorMessage)
}

export default {
  submit,
  errorHandler
}
