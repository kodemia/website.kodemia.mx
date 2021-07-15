
import { GetServerSidePropsContext } from 'next'

export default function Brochure () {
  return null
}

export function getServerSideProps (context: GetServerSidePropsContext) {
  const url = `//${context.req.headers.host}/brochures/javascript-live`

  context.res
    .writeHead(302, { Location: url })
    .end()

  return {
    props: {}
  }
}
