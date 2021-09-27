
import Analytics from 'analytics'
import segmentPlugin from '@analytics/segment'
import GTMPlugin from '@analytics/google-tag-manager'

export default Analytics({
  debug: true,
  app: 'website-kodemia',
  plugins: [
    segmentPlugin({
      writeKey: 'FFxBJgqC4qEl7OtIntzpJPRHu9XaderU'
    }),
    GTMPlugin({
      containerId: 'GTM-M752N7Z'
    })
  ]
})
