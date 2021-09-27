import { AnalyticsInstance } from 'analytics'
import Analytics from 'lib/analytics'

let analytics: AnalyticsInstance

function init () {
  analytics = Analytics()
}

export function onPageView () {
  init()
  analytics.page()
}

export function onLoginComplete () {

}
