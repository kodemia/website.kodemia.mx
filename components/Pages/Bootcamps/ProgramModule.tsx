
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
    <section className='columns is-multiline program-module'>
      <div>
        <H2>
          Los Temas
        </H2>
      </div>
      {
        modules.map((module, index) => (
          <article
            key={`module-${index}`}
            className='column is-full data-module-container'
          >
            <H5>
              {module.week}
            </H5>
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
          </article>
        ))
      }
    </section>
  )
}
