
import api from 'lib/api'
import * as zod from 'zod'

import registerSchema from 'schemas/registerCompanyForm.schema'
type RegisterFormData = zod.infer<typeof registerSchema>

export async function register (data: RegisterFormData) {
  const url = '/active-campaign/companies'
  return api.post(url, data)
}

export default {
  register
}
