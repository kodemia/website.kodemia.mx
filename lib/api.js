import axios from 'axios'
import _ from 'lodash'

const baseURL = process.env.NEXT_PUBLIC_URL_API

const api = axios.create({ baseURL })

export const login = async (email, password) => {
  const url = '/auth/login'
  const response = await api.post(url, { email, password })
  const token = _.get(response, 'data.payload.token')

  return token
}
