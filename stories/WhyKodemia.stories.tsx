import React from 'react'
import { Story, Meta } from '@storybook/react'

import WhyKodemia from '../components/Pages/Home/WhyKodemia'

export default {
  title: 'base/WhyKodemia',
  component: WhyKodemia
} as Meta

const Template: Story = () => <WhyKodemia />

export const Default = Template.bind({})
