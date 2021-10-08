
import _ from 'lodash'

import api from 'lib/api'
import Auth from 'lib/auth'
import { AxiosError } from 'axios'

export async function getAll () {
  const url = '/classes'
  const response = await api.get(url, {
    headers: { Authorization: Auth.getToken() }
  })
  return _.get(response, 'data.payload.classes')
}

export async function errorHandler (error: AxiosError) {
  return error
}

export default {
  getAll,
  errorHandler
}
