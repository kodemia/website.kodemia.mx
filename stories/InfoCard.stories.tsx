
import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import InfoCard from '../components/InfoCard'

export default {
  title: 'Base/InfoCard',
  component: InfoCard

} as Meta

const Template: Story = (args) => <InfoCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  icon: '/Icon-Objetivo.svg',
  title: 'Te acompañamos en el proceso',
  description: 'Todos los días, por módulos y por Bootcamp, llevarás proyectos prácticos reales'
}
