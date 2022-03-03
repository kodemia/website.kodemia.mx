
import React, { useState } from 'react'
import classNames from 'classnames'

import H3 from 'components/H3'
import H5 from 'components/H5'
import InfoBullet from 'components/InfoBullet'

export interface Skill {
  icon: string
  title: string
  text: string
}

export interface Program {
  name: string,
  image: string
  skills: Array<Skill>
}

export interface Props {
  chooseKoder: Array<Program>
  cyanTitle: string
  subtitle: string
  whiteTitle: string
}

export default function ChooseAKoder ({ chooseKoder, cyanTitle, subtitle, whiteTitle }: Props): JSX.Element {
  const [activeProgram, setActiveProgram] = useState(0)
  return (
    <section className='choose-a-koder is-flex is-justify-content-center'>
      <div className='columns is-multiline section-container choose-a-koder-wrapper'>
        <div className='column is-full title-choose'>
          <H5>
            {subtitle}
          </H5>
          <div className='title-container'>
            <H3
              whiteText={whiteTitle}
              cyanText={cyanTitle}
            />
          </div>
        </div>
        <div className='column is-full bar-container '>
          <div className='columns bar-wrapper is-mobile'>
            {
              chooseKoder.map((program, index) => (
                <div
                  className='column  bar-column'
                  key={`step-slider-${index}`}
                  onClick={() => setActiveProgram(index)}
                >
                  <div className='columns is-multiline is-mobile bar'>
                    <div
                      className={classNames(
                        'column is-full has-text-centered has-text-weight-medium-on-desktop bar-text',
                        {
                          'is-inactive-text': activeProgram !== index
                        }
                      )}
                    >
                      {program.name}
                    </div>
                    <div
                      className={classNames(
                        'column',
                        'is-full',
                        'bar-bar',
                        'p-0',
                        { first: index === 0 },
                        { last: index === (chooseKoder.length - 1) }
                      )}
                    >
                      <div
                        className={classNames(
                          'indicator',
                          { 'has-background-info': activeProgram === index }
                        )}
                      >
                        &nbsp;
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='column is-full image-container'>
          {
            chooseKoder.map((program, index) =>
              <img
                key={`img-choose-${index}`}
                src={program.image}
                alt={`kodemia-${program.name}`}
                className={classNames(
                  'slide-item',
                  {
                    'is-active': activeProgram === index,
                    'is-inactive': activeProgram !== index
                  }
                )}
              />
            )
          }
        </div>
        <div className='column slide-choose '>
          {
            chooseKoder.map((program, index) => (
              <div
                key={`skill-${index}`}
                className={classNames(
                  'slide-items columns',
                  {
                    'is-active': activeProgram === index,
                    'is-inactive': activeProgram !== index
                  }
                )}
              >
                {
                  program.skills.map((skill, index) => (
                    <div
                      className='column is-half is-full-mobile'
                      key={`skill-${skill.title}-${index}`}
                    >
                      <InfoBullet
                        icon={skill.icon}
                        title={skill.title}
                        text={skill.text}
                      />
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
