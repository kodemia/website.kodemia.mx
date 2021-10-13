
import { AnalyticsPlugin } from 'analytics'
import { hotjar } from 'react-hotjar'

interface HotjarPluginConfig {
  id: number,
  scriptVersion: number
}
interface HotjarPluginData {
  config: HotjarPluginConfig,
  payload: {
    userId: string
    traits: {
      email: string
      isExpired: boolean
      isMentor: boolean
      isTemporal: boolean
    }
  }
}

export default function facebookPixelPlugin ({ id, scriptVersion }: HotjarPluginConfig): AnalyticsPlugin {
  return {
    name: 'hotjar',
    config: { id, scriptVersion },
    initialize: ({ config }: HotjarPluginData) => {
      try {
        hotjar.initialize(config.id, config.scriptVersion)
      } catch (error) {
        // TODO: send error to sentry
        console.error('[analytics-plugin-hotjar] Could not initialize', error)
      }
    },
    identify: ({ payload }: HotjarPluginData) => {
      try {
        hotjar.identify(payload.userId, payload.traits)
      } catch (error) {
        // TODO: send error to sentry
        console.error('[analytics-plugin-hotjar] Could not identify', error)
      }
    },
    loaded: () => !!hotjar
  }
}
