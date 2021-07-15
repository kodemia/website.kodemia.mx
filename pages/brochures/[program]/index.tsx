
import { GetServerSidePropsContext } from 'next'
import { Program, BrochureFormat } from 'types/common'

import brochures from 'config/brochure-links.json'

export default function DownloadBrochure () {
  return null
}

export function getServerSideProps (context: GetServerSidePropsContext) {
  const program: Program = context?.params?.program as Program ?? 'javascript-live'
  const version: BrochureFormat = context?.query?.version as BrochureFormat ?? 'mobile'

  // TODO: remove hardcoded version when 2021v2 updates are applied to the website
  context.res
    .writeHead(302, { Location: brochures['2021v1'][program][version] })
    .end()

  return {
    props: {}
  }
}
