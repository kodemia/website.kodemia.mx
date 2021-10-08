
import _ from 'lodash'
import api from 'lib/api'
import { AxiosError } from 'axios'

export async function submit (email: string, password: string) {
  const url = '/auth/login'
  const response = await api.post(url, { email, password })
  return _.get(response, 'data.payload.token')
}

export function errorHandler (error: AxiosError) {
  return error
}

export default {
  submit,
  errorHandler
}
