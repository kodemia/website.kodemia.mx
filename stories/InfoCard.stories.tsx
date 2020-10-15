
import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import InfoCard from '../components/InfoCard'
import icon from '../public/Icon-Objetivo.svg'

export default {
  title: 'Base/InfoCard',
  component: InfoCard

} as Meta

const Template: Story = (args) => <InfoCard {...args} />

export const Info = Template.bind({})
Info.args = {
  icon: { icon },
  title: 'Te acompañamos en el proceso',
  description: 'Todos los días, por módulos y por Bootcamp, llevarás proyectos prácticos reales'
}
