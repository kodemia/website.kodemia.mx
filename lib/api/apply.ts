
import api from 'lib/api'
import { AxiosError } from 'axios'
import * as zod from 'zod'
import applySchema from 'schemas/applyForm.schema'

type ApplyFormData = zod.infer<typeof applySchema>

export async function submit (data: ApplyFormData) {
  const url = '/active-campaign/apply'
  return api.post(url, data)
}

export function errorHandler (error: AxiosError) {
  return error
}

export default {
  submit,
  errorHandler
}
