
import React from 'react'
import { Story, Meta } from '@storybook/react'

import Hero from '../components/Pages/Home/Hero'

export default {
  title: 'Home/Hero',
  component: Hero
} as Meta

const Template: Story = () => <Hero />

export const Styled = Template.bind({})