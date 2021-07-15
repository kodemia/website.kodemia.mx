
import { GetServerSidePropsContext } from 'next'

// TODO: fetch this data from prismic
import brochures from 'config/brochure-links.json'

type Bootcamp = 'javascript-live'
type Version = 'desktop' | 'mobile'

export default function DownloadBrochure () {
  return null
}

export function getServerSideProps (context: GetServerSidePropsContext) {
  const program: Bootcamp = context?.params?.program as Bootcamp ?? 'javascript-live'
  const version: Version = context?.query?.version as Version ?? 'mobile'

  context.res
    .writeHead(302, { Location: brochures['2021v1'][program][version] })
    .end()

  return {
    props: {}
  }
}
