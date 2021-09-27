
const pixelId = process.env.PIXEL_ID || ''
const ENV = process.env.NODE_ENV

export async function init () {
  // if (ENV !== 'production') return
  console.log('fb init')
  const FacebookPixel = await import('react-facebook-pixel')
  console.log('facebookPixel: ', FacebookPixel)
  FacebookPixel.default.init(pixelId, undefined, {
    autoConfig: true,
    debug: true
  })
}
