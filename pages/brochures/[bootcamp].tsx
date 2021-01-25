
import { GetServerSidePropsContext } from 'next'

type Bootcamp = 'javascript-live' | 'python-live'
type Version = 'desktop' | 'mobile'

export default function DownloadBrochure () {
  return null
}

export function getServerSideProps (context: GetServerSidePropsContext) {
  // TODO: fetch this data from prismic
  const bootcampsMap = {
    'javascript-live': {
      desktop: 'https://kodemia.cdn.prismic.io/kodemia/fa52daf0-0023-49f2-85eb-7e5a8064a116_BJL_D-G11_compressed.pdf',
      mobile: 'https://kodemia.cdn.prismic.io/kodemia/d5190b06-1f45-43c7-9f30-5f63fcf56e76_BPL_M-G2_compressed.pdf'
    },
    'python-live': {
      desktop: 'https://kodemia.cdn.prismic.io/kodemia/a7ccbdfb-b5a8-48e0-841c-d371809da481_BPL_D-G2_compressed.pdf',
      mobile: 'https://kodemia.cdn.prismic.io/kodemia/941ababa-7e35-4140-9093-8d14175fc909_BJL_M-G11_compressed.pdf'
    }
  }

  const bootcamp: Bootcamp = context?.params?.bootcamp as Bootcamp ?? 'javascript-live'
  const version: Version = context?.query?.version as Version ?? 'mobile'

  context.res
    .writeHead(302, { Location: bootcampsMap[bootcamp][version] })
    .end()

  return {
    props: {}
  }
}
