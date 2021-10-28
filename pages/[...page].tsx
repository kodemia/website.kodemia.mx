
import { GetServerSidePropsContext, InferGetServerSidePropsType, GetServerSidePropsResult } from 'next'
import { builder, BuilderComponent, Builder } from '@builder.io/react'

import NavBar from 'components/LandingNavbar'
import Seo from 'components/SEO'
import NotFoundPage from 'pages/404'

interface Props {
  content: {
    data: {
      navbar: {
        show: boolean
        desktopLogo: string
        mobileLogo: string
      }
    }
  }
  isPreviewOrEditingInBuilder: boolean
}

export default function BuilderPage (props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const pageNotFound = !(props.content || Builder.isPreviewing)

  if (pageNotFound) return <NotFoundPage />

  return (
    <>
      <Seo
        title='Kodemia | Backbase - mobile'
      />
      {
        props.content?.data?.navbar?.show &&
        <NavBar
          desktopLogo={props.content?.data?.navbar?.desktopLogo}
          mobileLogo={props.content?.data?.navbar?.mobileLogo}
        />
      }
      <BuilderComponent
        content={props.content}
        model='page'
      />
    </>
  )
}

export async function getServerSideProps (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Props>> {
  const isPreviewOrEditingInBuilder =
    Builder.isEditing ||
    Builder.isPreviewing ||
    context.query.__builder_editing__ != null

  const content = await builder.get('page', {
    url: context.resolvedUrl,
    options: {
      includeUnpublished: isPreviewOrEditingInBuilder
    }
  }).promise()

  return {
    props: {
      content: content ?? null,
      isPreviewOrEditingInBuilder
    }
  }
}
