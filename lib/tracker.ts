import { AnalyticsInstance } from 'analytics'
import Analytics from 'lib/analytics'
import Auth from 'lib/auth'

import { Event } from 'types/common'
import { Mentor } from 'types/common'

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

export function onTrapPageLoad () {
  init()
  const user = getUserTraits()
  analytics.track('Trap Page Shown',
  { user })
}

export function onExpiredUserClickTrapPageContinueButton () {
  init()
  const user = getUserTraits()
  analytics.track('Trap Page Whatsapp Button Click', user)
}

export function onAuthReset () {
  init()
  const user = getUserTraits()
  analytics.track('Auth reset',
  { user })
  analytics.reset()
}

export function onFooterButtonClicked (buttonName: 'Whatsapp' | 'Telegram') {
  init()
  const user = getUserTraits()
  analytics.track(`Footer ${buttonName} Button Clicked`,
  { user })
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

export function onFooterLinkClicked (linkName: FooterLinkName) {
  init()
  const user = getUserTraits()
  analytics.track(`Footer ${linkName} Link Clicked`,
  { user })
}

export function onEventButtonClicked (event:Event):void {
  init()
  const user = getUserTraits()
  analytics.track(`Event Button Clicked`,
  { user, event })
}

type MentorLinkName = 'Github'
| 'LinkedIn'
| 'Twitter'

export function onMentorLinkClicked (linkName: MentorLinkName) {
  init()
  const user = getUserTraits()
  analytics.track(`Mentor ${linkName} Link Clicked`,
  { user })
}
