
import React from 'react'
import H3 from '../../H3'

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
    <div>
      {
        modules.map((module, index) => (
          <section key={`module-${index}`}>
            <H3 text={module.week} />
            <h2>{module.module}
              <span>{module.title}</span>
            </h2>
            <div>
              {
                module.themes.map((theme, index) => (
                  <article key={`theme-${index}`}>
                    <img
                      src={theme.image}
                      alt={`bootcamp-${theme.theme}`}
                      width={300}
                    />
                    <p>{theme.theme}</p>
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
