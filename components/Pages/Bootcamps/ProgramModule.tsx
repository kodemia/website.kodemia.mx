
import React from 'react'
import Image from 'next/image'
import H3 from '../../H3'
import TextCursor from '../../TextCursor'

export interface Theme {
  theme: string
  image: string
}

export interface ModuleBootcamp{
    module: string
    week: string,
    title: string
    themes: Array<Theme>
}
export interface Props {
  modules: Array<ModuleBootcamp>
}

export default function ProgramModule ({ modules = [] }: Props) {
  return (
    <div className='columns is-multiline program-module'>
      {
        modules.map((module, index) => (
          <section
            key={`module-${index}`}
            className='column is-full data-module-container'
          >
            <H3 text={module.week} />
            <h2 className='title-module'>
              {module.module}
              <TextCursor text={module.title} />
            </h2>
            <div className='is-flex is-flex-wrap-wrap themes-container'>
              {
                module.themes.map((theme, index) => (
                  <article
                    key={`theme-${index}`}
                    className='theme is-flex is-flex-direction-column is-align-content-center is-flex-direction-column'
                  >
                    <Image
                      src={theme.image}
                      alt={`bootcamp-${theme.theme}`}
                      width='100%'
                      height='auto'
                    />
                    <p className='subtitle'>{theme.theme}</p>
                  </article>
                ))
              }
            </div>
          </section>
        ))
      }
    </div>
  )
}
