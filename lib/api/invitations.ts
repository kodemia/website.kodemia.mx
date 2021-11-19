
import api from 'lib/api'
import * as auth from 'lib/api/auth'

export async function getById (invitationId: string) {
  const invitation = await api.get(`/invitations/${invitationId}`)
  return invitation.data?.payload?.invitations
}

export async function getAllByEventId (eventId: string) {
  const token = await auth.getToken(process.env.API_USER as string, process.env.API_PASSWORD as string)

  const response = await api.get(`/invitations/events/${eventId}`, {
    headers: { authorization: token }
  })

  return response.data?.payload?.invitations
}
