import { AnalyticsInstance } from 'analytics'
import Analytics from 'lib/analytics'
import Auth from 'lib/auth'

type UserTraits = {
  email: string
  isExpired: boolean
  isMentor: boolean
  isTemporal: boolean
}

let analytics: AnalyticsInstance

function init () {
  analytics = Analytics()
}

export function onPageView () {
  init()
  analytics.page()
}

export function onLogin (email: string) {
  init()
  const {
    id: userId,
    isExpired,
    isMentor,
    isTemporal
  } = Auth.getDecodedTokenPayload()

  analytics.identify(userId, {
    email,
    isExpired,
    isMentor,
    isTemporal
  },
  {},
  ({ payload }) => analytics.track('User Log In', payload.traits))
}

export function onLogOut () {
  init()
  analytics.track('User Log Out')
  analytics.reset()
}

export function onTrapPageLoad () {
  init()
  const user: UserTraits = analytics.user('traits')
  analytics.track('Trap Page Shown', user)
}

export function onExpiredUserClickTrapPageContinueButton () {
  init()
  const user: UserTraits = analytics.user('traits')
  analytics.track('Trap Page Whatsapp Button Click', user)
}

export function onAuthReset () {
  init()
  const user: UserTraits = analytics.user('traits')
  analytics.track('Auth reset', user)
  analytics.reset()
}
