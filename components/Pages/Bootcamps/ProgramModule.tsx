
import React from 'react'
// My components
import H5 from '../../H5'
import H3 from '../../H3'
import H2 from '../../H2'

export interface Theme {
  theme: string
  image: string
}

export interface ModuleBootcamp {
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
      <div>
        <H2 text='Los Temas' />
      </div>
      {
        modules.map((module, index) => (
          <section
            key={`module-${index}`}
            className='column is-full data-module-container'
          >
            <H5 text={module.week} />
            <H3
              whiteText={module.module}
              cyanText={module.title}
            />
            <div className='is-flex is-flex-wrap-wrap themes-container'>
              {
                module.themes.map((theme, index) => (
                  <article
                    key={`theme-${index}`}
                    className='theme is-flex is-flex-direction-column is-align-content-center is-flex-direction-column'
                  >
                    <img
                      src={theme.image}
                      alt={`bootcamp-${theme.theme}`}
                      className='image'
                    />
                    <p className=' description-paragraph subtitle'>
                      {theme.theme}
                    </p>
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
