import React from 'react'
import { Story, Meta } from '@storybook/react'

import WhyKodemia, { Props } from '../components/Pages/Home/WhyKodemia'

export default {
  title: 'Base/WhyKodemia',
  component: WhyKodemia
} as Meta

const Template: Story<Props> = (cards) => <WhyKodemia {...cards} />

export const Default = Template.bind({})

Default.args = {
  cards: [
    {
      icon: '/icons/Icon-Objetivo.svg',
      title: 'Te acompañamos en el proceso',
      text: 'Todos los días, por módulos y por Bootcamp, llevarás proyectos prácticos reales'
    }
  ]
}
