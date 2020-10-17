
import React from 'react'
import { Story, Meta } from '@storybook/react'

import Button, { Props } from '../components/Button'

export default {
  title: 'Base/Button',
  component: Button,
  argTypes: {
    isPrimary: {
      control: 'boolean'
    },
    hasWhiteBg: {
      control: 'boolean'
    },
    icon: {
      control: 'text'
    },
    label: {
      control: 'text'
    }
  },
  decorators: [ Story => <div style={{maxWidth: '200px'}} ><Story/></div> ]
} as Meta

const Template: Story<Props> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isPrimary: true,
  label: 'Conocer más',
  hasWhiteBg: false
}

export const Secondary = Template.bind({})
Secondary.args = {
  isPrimary: false,
  label: 'Conocer más',
  hasWhiteBg: false
}

export const WhiteBg = Template.bind({})
WhiteBg.args = {
  label: 'Conocer más',
  hasWhiteBg: true
}
