
import React from 'react'
import { Story, Meta } from '@storybook/react'

import KodemiaFinancing from '../components/Pages/Home/KodemiaFinancing'

export default {
  title: 'Home/KodemiaFinancing',
  component: KodemiaFinancing
} as Meta

const Template: Story = () => <KodemiaFinancing />

export const Styled = Template.bind({})
