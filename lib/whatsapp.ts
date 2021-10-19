
export default class Whatsapp {
  static url = new URL('https://api.whatsapp.com/send')
  static phone = '5215573255094'

  public static copies = {
    trialPeriodExpired: '¡Hola, Vero! Mi periodo en la plataforma expiró y quiero continuar con mi proceso de aplicación 😀',
    footerButton: 'Hola quiero conocer más de Kodemia'
  }

  static createLink (text: string) {
    Whatsapp.url.searchParams.append('phone', Whatsapp.phone)
    Whatsapp.url.searchParams.append('text', text)
    return Whatsapp.url.toString()
  }
}
