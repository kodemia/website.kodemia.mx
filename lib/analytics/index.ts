
import Analytics, { AnalyticsInstance } from 'analytics'
import googleTagManagerPlugin from '@analytics/google-tag-manager'
import mixpanelPlugin from '@analytics/mixpanel'
import googleAnalyticsPlugin from '@analytics/google-analytics'

import facebookPixelPlugin from 'lib/analytics/custom-plugins/facebook-pixel'
import debuggerPlugin from 'lib/analytics/custom-plugins/debugger'
import hotjarPlugin from 'lib/analytics/custom-plugins/hotjar'

const isProduction = process.env.NODE_ENV === 'production'

// Analytics singleton
let analyticsInstance: AnalyticsInstance

const plugins = [
  googleTagManagerPlugin({
    containerId: process.env.GTM_CONTAINER_ID
  }),
  googleAnalyticsPlugin({
    trackingId: process.env.GA_TRACKING_ID
  }),
  facebookPixelPlugin({
    pixelId: process.env.FB_PIXEL_ID
  }),
  mixpanelPlugin({
    token: process.env.MIXPANEL_TOKEN
  }),
  hotjarPlugin({
    id: parseInt(process.env.HOTJAR_ID as string),
    scriptVersion: 6
  })
]

const developmentPlugins = [
  debuggerPlugin({
    debug: false
  })
]

export default function init () {
  if (analyticsInstance) return analyticsInstance

  if (!isProduction) {
    plugins.push(developmentPlugins)
  }

  analyticsInstance = Analytics({
    app: 'website-kodemia',
    debug: !isProduction,
    plugins: plugins
  })

  return analyticsInstance
}
