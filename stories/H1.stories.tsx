
import React from 'react'
import { Story, Meta } from '@storybook/react'

import H1, { Props } from '../components/H1'

export default {
  title: 'Base/H1',
  component: H1,
  argTypes: {
    text: {
      control: 'text' 
    }
  }
} as Meta

const Template: Story<Props> = (args) => <H1 {...args} />

export const h1 = Template.bind({})
h1.args = {
  text: 'Transforma tu vida programando'
}
