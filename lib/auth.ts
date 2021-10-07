
import jwt, { JwtPayload } from 'jsonwebtoken'
import dayjs from 'dayjs'

interface TokenPayload extends JwtPayload {
  id: string
  isExpired?: boolean
}

export default class Auth {
  static readonly authTokenKey = 'token'
  static readonly tokenStorage = window.localStorage

  static getToken (): string | null {
    return Auth.tokenStorage.getItem(Auth.authTokenKey)
  }

  static setToken (token: string): void {
    if (!token) throw new Error('Token is required')

    Auth.tokenStorage.setItem(Auth.authTokenKey, token)
  }

  static deleteToken () {
    Auth.tokenStorage.removeItem(Auth.authTokenKey)
  }

  static isExpired (): boolean {
    const { isExpired, exp } = Auth.getDecodedTokenPayload()

    if (isExpired) return true

    const isBeforeExpirationDate = dayjs().isAfter(dayjs.unix(exp ?? 0))
    if (isBeforeExpirationDate) return true

    return false
  }

  static getDecodedTokenPayload () {
    const token = Auth.getToken()

    if (!token) throw new Error('Could not find JWT in the storage')

    const { payload } = jwt.decode(token) as JwtPayload
    return payload as TokenPayload
  }
}
