
import _ from 'lodash'

import api from 'lib/api'
import Auth from 'lib/auth'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import Router from 'next/router'

const errors = {
  expiredAccount: {
    status: 412
  },
  network: {
    message: 'Error de red, intenta de nuevo'
  },
  unknown: {
    message: 'Ocurrió un error desconocido, por favor intenta mas tarde'
  }
}

export async function getAll () {
  const url = '/classes'
  const response = await api.get(url, {
    headers: { Authorization: Auth.getToken() }
  })
  return _.get(response, 'data.payload.classes')
}

export async function errorHandler (error: AxiosError) {
  const status = error.response?.status

  switch (status) {
    case errors.expiredAccount.status:
      return Router.replace('/fin-periodo-de-prueba')

    default:
      Auth.deleteToken()
      Router.replace('/login')
      toast.error(errors.network.message)
      break
  }
}

export default {
  getAll,
  errorHandler
}
