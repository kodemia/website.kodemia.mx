import { useEffect } from 'react'
import Router from 'next/router'
import { checkTokenExpiration } from 'utils/utils'

export function useAuth(): void {
  useEffect(() => {
    try {
      const token = window.sessionStorage.getItem('token') || ''
      if (!token) Router.replace('/login')
      checkTokenExpiration(token)
    } catch (error) {
      console.error(error)
    }
  })

}