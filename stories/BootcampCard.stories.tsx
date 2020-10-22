import React from 'react'
import { Story, Meta } from '@storybook/react'

import BootcampCard, { Props } from '../components/BootcampCard'

export default {
  title: 'Base/BootcampCard',
  component: BootcampCard,
  argTypes: {
    mode: {
      control: 'text'
    },
    date: {
      control: 'text'
    },
    schedule: {
      control: 'text'
    },
    feature: {
      control: 'text'
    }
  },
  decorators: [Story => <div style={{ maxWidth: '300px' }}><Story /></div>]
} as Meta

const Template: Story<Props> = (args) => <BootcampCard {...args} />

export const Lifetime = Template.bind({})
Lifetime.args = {
  mode: 'Modo Lifetime',
  date: '19 de Octubre',
  schedule: 'Lunes a viernes de 07:00 - 10:00 pm',
  feature: 'Acceso de por vida a Kodemia'
}
