
import { GetServerSidePropsContext } from 'next'

// TODO: fetch this data from prismic
import bootcampsMap from 'config/brochure-links.json'

type Bootcamp = 'javascript-live' | 'python-live'
type Version = 'desktop' | 'mobile'

export default function DownloadBrochure () {
  return null
}

export function getServerSideProps (context: GetServerSidePropsContext) {
  const bootcamp: Bootcamp = context?.params?.bootcamp as Bootcamp ?? 'javascript-live'
  const version: Version = context?.query?.version as Version ?? 'mobile'

  context.res
    .writeHead(302, { Location: bootcampsMap[bootcamp][version] })
    .end()

  return {
    props: {}
  }
}
