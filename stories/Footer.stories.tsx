
import React from 'react'
import { Story, Meta } from '@storybook/react'

import Footer from '../components/Footer'

export default {
  title: 'Base/Footer',
  component: Footer
} as Meta

const Template: Story = () => <Footer />

export const Styled = Template.bind({})
