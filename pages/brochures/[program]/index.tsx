
import { GetServerSidePropsContext } from 'next'
import { Program, BrochureFormat, BrochureVersion } from 'types/common'

import brochures from 'config/brochure-links.json'

export default function DownloadBrochure () {
  return null
}

export function getServerSideProps (context: GetServerSidePropsContext) {
  const version: BrochureVersion = brochures.latestVersion as BrochureVersion
  const program: Program = context?.params?.program as Program ?? 'javascript-live'
  const format: BrochureFormat = context?.query?.version as BrochureFormat ?? 'mobile'

  // TODO: remove hardcoded version when 2021v2 updates are applied to the website
  context.res
    .writeHead(302, { Location: brochures[version][program][format] })
    .end()

  return {
    props: {}
  }
}
