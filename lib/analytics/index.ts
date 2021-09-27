
import Analytics, { AnalyticsInstance } from 'analytics'
import GTMPlugin from '@analytics/google-tag-manager'
import mixpanelPlugin from '@analytics/mixpanel'

import facebookPixelPlugin from 'lib/analytics/custom-plugins/facebook-pixel'
import debuggerPlugin from 'lib/analytics/custom-plugins/debugger'

const IS_PRODUCTION_ENV = process.env.NODE_ENV === 'production'

// Analytics singleton
let analyticsInstance: AnalyticsInstance

const productionPlugins = [
  GTMPlugin({
    containerId: process.env.GTM_CONTAINER_ID
  }),
  facebookPixelPlugin({
    pixelId: process.env.FB_PIXEL_ID
  }),
  mixpanelPlugin({
    token: process.env.MIXPANEL_TOKEN
  })
]

const developmentPlugins = [
  debuggerPlugin({
    debug: false
  })
]

export default function init () {
  if (analyticsInstance) return analyticsInstance

  analyticsInstance = Analytics({
    app: 'website-kodemia',
    debug: !IS_PRODUCTION_ENV,
    plugins: IS_PRODUCTION_ENV
      ? productionPlugins
      : developmentPlugins
  })

  return analyticsInstance
}
