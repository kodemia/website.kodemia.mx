
import { AnalyticsPlugin } from 'analytics'
import { hotjar } from 'react-hotjar'

interface HotjarPluginConfig {
  id: number,
  scriptVersion: number
}
interface HotjarPluginData {
  config: HotjarPluginConfig
}

export default function facebookPixelPlugin ({ id, scriptVersion }: HotjarPluginConfig): AnalyticsPlugin {
  return {
    name: 'hotjar',
    config: { id, scriptVersion },
    initialize: (data: HotjarPluginData) => {
      try {
        hotjar.initialize(data.config.id, data.config.scriptVersion)
      } catch (error) {
        // TODO: send error to sentry
        console.error('[analytics-plugin-hotjar] Could not initialize', error)
      }
    },
    loaded: () => !!hotjar
  }
}
