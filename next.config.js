const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

module.exports = withPlugins([withImages({})])

module.exports = {
  env: {
    URL_API: 'https://api-kodemia-mx.vercel.app'
  }
}
