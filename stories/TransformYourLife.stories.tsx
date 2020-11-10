import React from 'react'
import { Story, Meta } from '@storybook/react'

import TransformYourLife from '../components/Pages/Home/TransformYourLife'

export default {
  title: 'Home/TransfromYourLife',
  component: TransformYourLife
} as Meta

const Template: Story = () => <TransformYourLife />

export const Styled = Template.bind({})
