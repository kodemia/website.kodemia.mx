
import _ from 'lodash'
import { toast } from 'react-toastify'

import api from 'lib/api'
import { AxiosError } from 'axios'

const errors = {
  invalidData: {
    status: 401,
    message: 'Email o password incorrectos'
  },
  network: {
    message: 'Error de red, intenta de nuevo'
  },
  unknown: {
    message: 'Error desconocido'
  }
}

export async function submit (email: string, password: string) {
  const url = '/auth/login'
  const response = await api.post(url, { email, password })
  return _.get(response, 'data.payload.token')
}

export function errorHandler (error: AxiosError) {
  if (!error.response) {
    return toast.error(errors.network.message)
  }

  switch (error.response?.status) {
    case errors.invalidData.status:
      toast.error(errors.invalidData.message)
      break

    default:
      toast.error(errors.unknown.message)
      break
  }
}

export default {
  submit,
  errorHandler
}
