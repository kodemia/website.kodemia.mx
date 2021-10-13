
const phone = '5215573255094'

export default class Whatsapp {
  url: URL

  constructor () {
    this.url = new URL('https://api.whatsapp.com/send')
    this.url.searchParams.append('phone', phone)
  }

  createLink (message?: string) {
    if (message) this.url.searchParams.append('text', message)

    return this.url.toString()
  }
}
