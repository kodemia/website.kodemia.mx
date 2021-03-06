import { toast } from 'react-toastify'
import Router from 'next/router'

export const checkToken = (status: number): void => {
  let errorMessage = 'Ocurrio un error, inicia sesión nuevamente ☠️ '

  if (status === 401) {
    errorMessage = 'Tu sesión expiró, inicia sesión nuevamente ☠️ '
    toast.error(errorMessage)
  } else {
    toast.error(errorMessage)
  }
  setTimeout(function () {
    window.sessionStorage.removeItem('token')
    Router.replace('/login')
  }, 2000)
}
