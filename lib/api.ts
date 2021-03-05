
import axios from 'axios'
import _ from 'lodash'
import * as zod from 'zod'

import applySchema from 'schemas/applyForm.schema'
import registerSchema from 'schemas/registerCompanyForm.schema'

type ApplyFormData = zod.infer<typeof applySchema>
type RegisterFormData = zod.infer<typeof registerSchema>

const baseURL = process.env.API_URL

const api = axios.create({ baseURL })

export const login = async (email: string, password: string) => {
  const url = '/auth/login'
  const response = await api.post(url, { email, password })
  const token = _.get(response, 'data.payload.token')
  return token
}

export async function apply(data: ApplyFormData) {
  const url = '/active-campaign/apply'
  const response = await api.post(url, data)
  return response
}

export const registerCompany = async (data: RegisterFormData) => {
  const url = '/active-campaign/companies'
  const response = await api.post(url, data)
  return response
}

export const getClasses = async (token: string | null) => {
  let result = { success: false, classes: [] }
  try {
    const url = '/classes'
    const response = await api.get(url, {
      headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmODdjYTRlYjk0MmI5NmFjZDE4NWRjNSIsImlzTWVudG9yIjpmYWxzZSwiaWF0IjoxNjE0OTI2MjUyLCJleHAiOjE2MTU1MzEwNTJ9.OylhYBcLuFnvS2KsRWwECV4JeWmfwUtuknxKgt9ABD0' }
    })

    result.classes = _.get(response, 'data.payload.classes')
    result.success = true

    return result

  } catch (error) {

    return result
  }
}
