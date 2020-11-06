import React from 'react'
import { Story, Meta } from '@storybook/react'

import YourLife from '../components/Pages/Home/YourLife'

export default {
  title: 'Home/YourLife',
  component: YourLife
} as Meta

const Template: Story = () => <YourLife />

export const Styled = Template.bind({})
