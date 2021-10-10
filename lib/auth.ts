
import jwt, { JwtPayload } from 'jsonwebtoken'
import dayjs from 'dayjs'

import * as tracker from 'lib/tracker'

interface TokenPayload extends JwtPayload {
  id: string
  isExpired?: boolean
  isMentor?: boolean
  isTemporal?: boolean
}

export default class Auth {
  static authTokenKey = 'token'

  static get (): string | null {
    return window.localStorage.getItem(Auth.authTokenKey)
  }

  static login (token: string, email: string): void {
    if (!token) throw new Error('Token is required')

    window.localStorage.setItem(Auth.authTokenKey, token)
    tracker.onLogin(email)
  }

  static reset (): void {
    window.localStorage.removeItem(Auth.authTokenKey)
    tracker.onAuthReset()
  }

  static isExpired (): boolean {
    try {
      const { exp } = Auth.getDecodedTokenPayload()

      const todayIsBeforeExpirationDate = dayjs().isAfter(dayjs.unix(exp ?? 0))

      return todayIsBeforeExpirationDate
    } catch (error) {
      return true
    }
  }

  static isTrialExpired (): boolean {
    try {
      const { isExpired } = Auth.getDecodedTokenPayload()
      return !!isExpired
    } catch (error) {
      return true
    }
  }

  static getDecodedTokenPayload (): TokenPayload {
    const token = Auth.get()

    if (!token) throw new Error('Could not find JWT in the storage')

    return jwt.decode(token) as TokenPayload
  }
}
