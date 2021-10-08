
import jwt, { JwtPayload } from 'jsonwebtoken'
import dayjs from 'dayjs'

interface TokenPayload extends JwtPayload {
  id: string
  isExpired?: boolean
}

export default class Auth {
  static authTokenKey = 'token'
  static tokenStorage: Storage

  static getToken (): string | null {
    return window.localStorage.getItem(Auth.authTokenKey)
  }

  static setToken (token: string): void {
    if (!token) throw new Error('Token is required')

    window.localStorage.setItem(Auth.authTokenKey, token)
  }

  static deleteToken (): void {
    window.localStorage.removeItem(Auth.authTokenKey)
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
    const token = Auth.getToken()

    if (!token) throw new Error('Could not find JWT in the storage')

    return jwt.decode(token) as TokenPayload
  }
}
