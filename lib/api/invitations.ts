
import api from 'lib/api'

export async function getById (invitationId: string) {
  const invitation = await api.get(`/invitations/${invitationId}`)
  return invitation.data?.payload?.invitations
}
