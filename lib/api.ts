import axios from 'axios'
import _ from 'lodash'
import * as zod from 'zod'

import applySchema from 'schemas/applyForm.schema'

type ApplyFormData = zod.infer<typeof applySchema>

//const baseURL = process.env.API_URL
const baseURL = 'https://api-kodemia-mx.vercel.app'

const api = axios.create({ baseURL })

export const login = async (email: string, password: string) => {
  const url = '/auth/login'
  const response = await api.post(url, { email, password })
  const token = _.get(response, 'data.payload.token')

  return token
}

export async function apply (data: ApplyFormData) {
  const url = '/active-campaign/apply'
  const response = await api.post(url, data)
  return response
}

export const getClasses = async (token: string | null) => {
  const url = '/classes'
  const response = await api.get(url, {
    headers: { Authorization: token }
  })
  const classes = _.get(response, 'data.payload.classes')
  return classes
}
