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

function getUserTraits (): UserTraits {
  return analytics.user('traits')
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

export function onTrapPageLoad (eventData={}) {
  init()
  const user = getUserTraits()
  analytics.track('Trap Page Shown',
  {
    user:{...user},
    event:{...eventData}
  })
}

export function onExpiredUserClickTrapPageContinueButton () {
  init()
  const user = getUserTraits()
  analytics.track('Trap Page Whatsapp Button Click', user)
}

export function onAuthReset (eventData={}) {
  init()
  const user = getUserTraits()
  analytics.track('Auth reset',
  {
    user:{...user},
    event:{...eventData}
  })
  analytics.reset()
}

export function onFooterButtonClicked (buttonName: 'Whatsapp' | 'Telegram', eventData={}) {
  init()
  const user = getUserTraits()
  analytics.track(`Footer ${buttonName} Button Clicked`,
  {
    user:{...user},
    event:{...eventData}
  })
}

type FooterLinkName = 'Facebook'
  | 'Instagram'
  | 'Twitter'
  | 'GitHub'
  | 'Medium'
  | 'YouTube'
  | 'LinkedIn'
  | 'Phone'
  | '01800 Phone'
  | 'EMail'
  | 'Privacy Policy'

export function onFooterLinkClicked (linkName: FooterLinkName,eventData={}) {
  init()
  const user = getUserTraits()
  analytics.track(`Footer ${linkName} Link Clicked`,
  {
    user:{...user},
    event:{...eventData}
  })
}

export function onEventButtonClicked (eventData:object):void {
  init()
  const user = getUserTraits()
  analytics.track(`Event Button Clicked`,
  {
    user:{...user},
    event:{...eventData}
  })
}
