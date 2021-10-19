
import { AnalyticsPlugin } from 'analytics'
import * as facebookPixel from 'lib/facebook'

interface FacebookPixelPluginConfig {
  pixelId?: string
}
interface FacebookPixelPluginData {
  config: FacebookPixelPluginConfig
}

export default function facebookPixelPlugin ({ pixelId }: FacebookPixelPluginConfig): AnalyticsPlugin {
  let pixel: typeof import('react-facebook-pixel')

  return {
    name: 'facebook-pixel',
    config: { pixelId },
    initialize: async (data: FacebookPixelPluginData) => {
      try {
        pixel = await facebookPixel.init(data.config.pixelId ?? '')
      } catch (error) {
        // TODO: send error to sentry
        console.error('[analytics-plugin-facebook-pixel] Could not initialize', error)
      }
    },
    page: () => pixel.pageView(),
    loaded: () => !!pixel
  }
}
