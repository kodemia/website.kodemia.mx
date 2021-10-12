
import { GetServerSidePropsContext, InferGetServerSidePropsType, GetServerSidePropsResult } from 'next'
import { builder, BuilderComponent, Builder } from '@builder.io/react'
import classNames from 'classnames'

import NotFoundPage from 'pages/404'

interface Props {
  content: any
  isPreviewOrEditingInBuilder: boolean
}

export default function BuilderPage (props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const pageNotFound = !(props.content || Builder.isPreviewing)

  if (pageNotFound) return <NotFoundPage />

  return (
    <>
      <div
        className={classNames(
          'flex justify-center',
          'w-full',
          'px-12'
        )}
      >
        <main className='max-w-1086-px self-center pt-10 w-full'>
          <BuilderComponent
            content={props.content}
            model='page'
          />
        </main>
      </div>
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
