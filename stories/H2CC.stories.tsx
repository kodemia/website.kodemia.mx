import React from 'react'
import { Story, Meta } from '@storybook/react'

import H2CC, { Props } from '../components/H2CC'

export default {
  title: 'Base/H2-cyan-cursor',
  component: H2CC,
  argTypes: {
    cyanText: {
      control: 'text'
    },
    whiteText: { 
      control: 'text' 
    }
  }
} as Meta

const Template: Story<Props> = (args) => <H2CC {...args} />

export const h2 = Template.bind({})
h2.args = {
  whiteText: 'Vivimos para',
  cyanText: 'formar programadores'
}
