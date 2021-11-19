
import api from 'lib/api'

export async function getToken (email: string, password: string) {
  const response = await api.post('/auth/login', { email, password })
  return response?.data?.payload?.token
}
