import React from 'react'
import { Story, Meta } from '@storybook/react'

import Navbar from '../components/Navbar'

export default {
  title: 'Base/Navbar',
  component: Navbar
} as Meta

const Template: Story = () => <Navbar />

export const Default = Template.bind({})
