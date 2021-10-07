import { AnalyticsInstance } from 'analytics'
import Analytics from 'lib/analytics'
import Auth from 'lib/auth'

let analytics: AnalyticsInstance

function init () {
  analytics = Analytics()
}

export function onPageView () {
  init()
  analytics.page()
}

export function onLoginComplete (email: string) {
  const { id: userId } = Auth.getDecodedTokenPayload()
  analytics.identify(userId, { email })
}

export function onLogOut () {
  analytics.reset()
}
