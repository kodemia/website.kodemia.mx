
import { GetServerSidePropsContext } from 'next'
import { Program, BrochureFormat } from 'types/common'

import brochures from 'config/brochure-links.json'

export default function DownloadBrochure () {
  return null
}

export function getServerSideProps (context: GetServerSidePropsContext) {
  const program: Program = context?.params?.program as Program ?? 'javascript-live'
  const version: BrochureFormat = context?.query?.version as BrochureFormat ?? 'mobile'

  context.res
    .writeHead(302, { Location: brochures['2021v1'][program][version] })
    .end()

  return {
    props: {}
  }
}
