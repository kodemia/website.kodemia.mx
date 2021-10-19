
export function init (pixelId: string) {
  return import('react-facebook-pixel')
    .then(module => module.default)
    .then(pixel => {
      pixel.init(pixelId)
      return pixel
    })
}
