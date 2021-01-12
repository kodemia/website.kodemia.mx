const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

module.exports = withPlugins([withImages({})])

module.exports = {
  env: {
    NEXT_PUBLIC_URL_API: 'https://api-kodemia-mx.vercel.app'
  }
}
