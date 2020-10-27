import React from 'react'
import { Story, Meta } from '@storybook/react'

import H2, { Props } from '../components/H2'

export default {
  title: 'Base/H2-cyan-cursor',
  component: H2,
  argTypes: {
    cyanText: {
      control: 'text'
    },
    whiteText: {
      control: 'text'
    }
  }
} as Meta

const Template: Story<Props> = (args) => <H2 {...args} />

export const h2 = Template.bind({})
h2.args = {
  whiteText: 'Vivimos para',
  cyanText: 'formar programadores'
}

export const h2isFirstCyan = Template.bind({})
h2.args = {
  cyanText: 'Vivimos para',
  whiteText: 'formar programadores',
  isFirstCyan: true
}
