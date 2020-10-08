const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins([
  [optimizedImages]
])

module.exports = {
  env: {
    GTM_CONTAINER_ID: process.env.GTM_CONTAINER_ID
  }
}
