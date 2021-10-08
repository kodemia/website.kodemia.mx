
import { useEffect } from 'react'
import Router from 'next/router'
import { toast } from 'react-toastify'
import Auth from 'lib/auth'

export function useAuth (): void {
  const expiredSessionMessage = 'Tu sesión expiró, inicia sesión nuevamente ☠️'
  useEffect(() => {
    try {
      if (Auth.isExpired()) {
        toast(expiredSessionMessage)
        Router.replace('/login')
      } else if (Auth.isTrialExpired()) {
        Router.replace('/fin-periodo-de-prueba')
      }
    } catch (error) {
      toast(expiredSessionMessage)
      Router.replace('/login')
    }
  })
}
