
import analytics from 'lib/analytics'
import * as facebook from 'lib/facebook'

export async function init () {
  console.log('tracker init')
  await facebook.init()
}

export function onPageView () {
  analytics.page()
}
