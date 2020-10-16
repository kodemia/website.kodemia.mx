import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import BootcampCard from '../components/BootcampCard'

export default {
  title: 'Base/BootcampCard',
  component: BootcampCard

} as Meta

const Template: Story = (args) => <BootcampCard {...args} />

export const Lifetime = Template.bind({})
Lifetime.args = {
  mode: 'Modo Lifetime',
  date: '19 de Octubre',
  schedule: 'Lunes a viernes de 07:00 - 10:00 pm',
  feature: 'Acceso de por vida a Kodemia'
}
