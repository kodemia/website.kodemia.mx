const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

module.exports = withPlugins([withImages({})])

module.exports = {
  env: {
    API_URL: process.env.API_URL
  }
}
