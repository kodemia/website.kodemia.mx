
import React from 'react'
import { Story, Meta } from '@storybook/react'

import OurBootcamps, { Props } from '../components/Pages/Home/OurBootcamps'

export default {
  title: 'Home/OurBootcamps',
  component: OurBootcamps
} as Meta

const Template: Story<Props> = (args) => <OurBootcamps {...args} />

export const Default = Template.bind({})
Default.args = {
  bootcamps: {
    javascript: {
      name: 'Bootcamp FullStack con',
      language: 'Javascript',
      description: 'Desarrollarás una web app completa con MERN orientada al Front End con React',
      duration: '19 semanas',
      modalities: [
        {
          name: 'Lifetime',
          description: 'Acceso de por vida a Kodemia',
          link: '/',
          schedule: {
            day: '19',
            month: 'Oct',
            year: '2020',
            hour: '7:00 - 10:00 pm',
            days: 'Lunes a viernes'
          }
        }
      ]
    }
  }
}
