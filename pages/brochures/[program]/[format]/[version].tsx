
import { GetServerSidePropsContext } from 'next'
import brochures from 'config/brochure-links.json'
import { Program, BrochureFormat, BrochureVersion } from 'types/common'

export default function DownloadBrochure () {
  return null
}

export function getServerSideProps (context: GetServerSidePropsContext) {
  const program: Program = context?.params?.program as Program ?? 'javascript-live'
  const format: BrochureFormat = context?.query?.format as BrochureFormat ?? 'mobile'
  const version: BrochureVersion = context?.query?.version as BrochureVersion ?? brochures.latestVersion

  const brochureUrl = brochures[version][program][format]

  context.res
    .writeHead(302, { Location: brochureUrl })
    .end()

  return {
    props: {}
  }
}
