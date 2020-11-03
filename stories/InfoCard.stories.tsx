
import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import InfoCard, { Props } from '../components/InfoCard'

export default {
  title: 'Base/InfoCard',
  component: InfoCard,
  argTypes: {
    icon: {
      control: 'text'
    },
    title: {
      control: 'text'
    },
    text: {
      control: 'text'
    }
  }

} as Meta

const Template: Story<Props> = (args) => <InfoCard {...args} />

export const Info = Template.bind({})
Info.args = {
  icon: '/icons/Icon-Objetivo.svg',
  title: 'Te acompañamos en el proceso',
  text: 'Todos los días, por módulos y por Bootcamp, llevarás proyectos prácticos reales'
}
